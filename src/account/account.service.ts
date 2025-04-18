import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // ajusta esse import se necessário
import { Prisma } from '@prisma/client';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async createAccount(userId: number) {
    // Busca a conta com maior numberAccount
    const lastAccount = await this.prisma.internalAccount.findFirst({
      orderBy: {
        numberAccount: 'desc',
      },
    });

    // Define o próximo numberAccount
    const nextNumberAccount = lastAccount
      ? lastAccount.numberAccount + 1
      : 1050;

    // Cria a nova conta
    const newAccount = await this.prisma.internalAccount.create({
      data: {
        numberAccount: nextNumberAccount,
        user: {
          connect: { id: userId },
        },
        // agency já tem default("10") no Prisma
      },
    });

    return newAccount;
  }
}
