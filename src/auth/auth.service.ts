import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePassword } from 'utils/bcrypt';
import { omit } from 'lodash';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(identifier: string, password: string) {
    try {
      const user = await this.usersService.findOneByEmailOrCPF(identifier);

      if (
        !user ||
        ('message' in user && 'success' in user && 'statusCode' in user)
      ) {
        return (
          user || {
            success: false,
            message: 'Usuário não encontrado',
            statusCode: 404,
          }
        );
      }

      const isPasswordValid = await comparePassword(password, user.password);

      if (!isPasswordValid) {
        return {
          success: false,
          message: 'Senha incorreta',
          statusCode: 401,
        };
      }

      const safeUser = omit(user, ['password']);

      return {
        success: true,
        message: 'Login realizado com sucesso',
        user: safeUser,
      };
    } catch (error) {
      console.error('Erro ao validar o usuário:', error);
      return {
        success: false,
        message: 'Erro interno ao validar usuário',
        statusCode: 500,
      };
    }
  }
}
