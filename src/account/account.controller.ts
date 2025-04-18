import { Controller, Post, Param } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post(':userId')
  async create(@Param('userId') userId: string) {
    return this.accountService.createAccount(+userId);
  }
}
