import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { hashPassword } from 'utils/bcrypt';
import { FindUserDto } from './dto/find-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const existsUser = await this.prisma.user.findUnique({
        where: {
          email: createUserDto.email,
        },
      });

      if (existsUser) {
        return {
          message: 'Usuário ja existe',
          succes: false,
          status: HttpStatus.CONFLICT,
        };
      }

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
}
