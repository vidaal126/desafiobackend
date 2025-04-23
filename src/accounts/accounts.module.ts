import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AccountsService],
  exports: [AccountsService],
})
export class AccountsModule {}
