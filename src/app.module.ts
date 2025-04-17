import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [UsersModule, AccountModule],
})
export class AppModule {}
