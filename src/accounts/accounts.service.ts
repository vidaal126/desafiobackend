import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  async createAccount(userId: number) {
    const numberAccount = String(Math.floor(Math.random() * 900000 + 100000)); // Garantindo que seja uma string
    return this.prisma.internalAccount.create({
      data: {
        numberAccount,
        agency: '10',
        balance: 0,
        user: {
          connect: { id: userId },
        },
      },
    });
  }
}
