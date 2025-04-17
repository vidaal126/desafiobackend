import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { comparePassword, hashPassword } from 'utils/bcrypt';
import { FindUserDto } from './dto/find-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const hashedPassword = await hashPassword(createUserDto.password);

      const create = await this.prisma.user.create({
        data: {
          name: createUserDto.name,
          cpf: createUserDto.cpf,
          password: hashedPassword,
          email: createUserDto.email,
        },
      });

      return {
        message: 'Usuário criado com sucesso!',
        success: true,
        status: HttpStatus.CREATED,
        data: create,
      };
    } catch (error) {
      return {
        message:
          error instanceof Error ? error.message : 'Error ao criar usuário.',
        success: false,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async findUser(findUserDto: FindUserDto) {
    try {
      const existsUser = await this.prisma.user.findUnique({
        where: {
          email: findUserDto.email,
        },
      });

      if (existsUser) {
        return {
          message: 'Usuário ja existe',
          succes: false,
          status: HttpStatus.CONFLICT,
        };
      }

      const foundUser = await this.prisma.user.findFirst({
        where: {
          OR: [{ email: findUserDto.email }, { id: findUserDto.user_id }],
        },
      });
      if (!foundUser) {
        return {
          message: 'Usuário não encontrado',
          success: false,
          statusCode: HttpStatus.NOT_FOUND,
        };
      }
      return {
        message: 'Usuário não encontrado',
        success: false,
        stattusCode: HttpStatus.NOT_FOUND,
      };
    } catch (error) {
      return {
        message: 'Erro interno no servidor',
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      };
    }
  }

  async validateUser(loginUserDto: LoginUserDto) {
    try {
      const { identifier, password } = loginUserDto;

      const isEmail = identifier.includes('@');

      if (!isEmail) {
        const validatorCpf = identifier.replace(/\D/g, '');

        if (validatorCpf.length !== 11) {
          return {
            message: 'CPF inválido. Deve conter 11 numéros',
          };
        }
      }

      const user = await this.prisma.user.findUnique({
        where: isEmail ? { email: identifier } : { cpf: identifier },
      });

      if (!user) {
        return {
          message: 'Usuário não encontrado',
          success: false,
          statusCode: HttpStatus.NOT_FOUND,
        };
      }

      const passwordValid = await comparePassword(password, user.password);

      if (!passwordValid) {
        return {
          message: 'Credenciais incorretas',
          success: false,
          statusCode: HttpStatus.UNAUTHORIZED,
        };
      }

      return {
        message: 'Login realizado com sucesso',
        succes: true,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      return {
        message: 'Erro interno do servidor',
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error:
          error instanceof Error
            ? error.message
            : 'Ocorreu um erro ao salvar no banco',
      };
    }
  }
}
