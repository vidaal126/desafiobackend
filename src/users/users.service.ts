import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { comparePassword, hashPassword } from 'utils/bcrypt';
import { FindUserDto } from './dto/find-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login-user.dto';

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
          cpf: findUserDto.identifier,
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
          OR: [{ email: findUserDto.identifier }, { id: findUserDto.user_id }],
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
  async login(loginDto: LoginDto) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          OR: [{ email: loginDto.identifier }, { cpf: loginDto.identifier }],
        },
      });

      if (!user) {
        return {
          message: 'Usuário não encontrado',
          success: false,
          status: HttpStatus.NOT_FOUND,
        };
      }

      const isPasswordValid = await comparePassword(
        loginDto.password,
        user.password,
      );
      if (!isPasswordValid) {
        return {
          message: 'Senha incorreta',
          success: false,
          status: HttpStatus.UNAUTHORIZED,
        };
      }

      return {
        message: 'Login realizado com sucesso!',
        success: true,
        status: HttpStatus.OK,
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          cpf: user.cpf,
        },
      };
    } catch (error) {
      return {
        message: 'Erro interno no servidor',
        success: false,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      };
    }
  }
}
