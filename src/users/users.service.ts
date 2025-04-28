import { Injectable, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { hashPassword } from 'utils/bcrypt';
import { AccountsService } from 'src/accounts/accounts.service';
import { User, InternalAccount } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly accountsService: AccountsService,
  ) {}

  async findOneByEmailOrCPF(identifier: string) {
    try {
      return await this.prisma.user.findFirst({
        where: {
          OR: [{ email: identifier }, { cpf: identifier }],
        },
      });
    } catch (error) {
      console.error('Erro ao buscar usuário:', error.message);
      return {
        message: 'Erro ao buscar o usuário. Tente novamente.',
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const userExists = await this.findOneByEmailOrCPF(createUserDto.cpf);
      if (userExists) return this.errorUserAlreadyExists();

      const hashedPassword = await hashPassword(createUserDto.password);

      const { user } = await this.prisma.$transaction(async (prisma) => {
        const user = await prisma.user.create({
          data: {
            name: createUserDto.name,
            cpf: createUserDto.cpf,
            email: createUserDto.email,
            password: hashedPassword,
          },
        });

        await prisma.cart.create({
          data: {
            userId: user.id,
            description: 'Carrinho inicial',
            status: 'PENDENTE',
            totalValue: 0,
            items: {
              create: [],
            },
          },
        });

        return { user };
      });

      const account = await this.accountsService.createAccount(user.id);

      await this.prisma.user.update({
        where: { id: user.id },
        data: { internalAccountId: account.id },
      });

      return this.buildSuccessResponse(user, account);
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message);
      return {
        message: 'Erro ao criar o usuário. Tente novamente.',
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  errorUserAlreadyExists() {
    return {
      message: 'CPF ou e-mail já estão cadastrados.',
      success: false,
      statusCode: HttpStatus.BAD_REQUEST,
    };
  }

  buildSuccessResponse(user: User, account: InternalAccount) {
    return {
      message: 'Usuário criado com sucesso!',
      success: true,
      statusCode: HttpStatus.CREATED,
      data: {
        id: user.id,
        name: user.name,
        cpf: user.cpf,
        email: user.email,
        account: {
          id: account.id,
          numberAccount: account.numberAccount,
          agency: account.agency,
          balance: account.balance,
        },
      },
    };
  }
}
