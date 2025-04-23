import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AccountsModule } from 'src/accounts/accounts.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersController } from './users.controller';

@Module({
  imports: [AccountsModule, PrismaModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
