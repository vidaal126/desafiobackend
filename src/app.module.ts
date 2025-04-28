import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    AccountsModule,
    CartModule,
    ProductsModule,
  ],
  providers: [],
})
export class AppModule {}
