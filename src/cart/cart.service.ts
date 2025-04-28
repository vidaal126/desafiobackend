import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productsService: ProductsService,
  ) {}

  async createCart(createCartDto: CreateCartDto) {
    try {
      const cart = await this.prisma.cart.create({
        data: {
          userId: createCartDto.userId,
          description: createCartDto.description,
          status: 'PENDENTE',
          totalValue: 0,
          items: {
            create: createCartDto.items,
          },
        },
      });

      return {
        success: true,
        message: 'Carrinho criado com sucesso',
        data: cart,
        statusCode: HttpStatus.CREATED,
      };
    } catch (error) {
      console.error('Erro ao criar carrinho:', error);
      return {
        success: false,
        message: 'Erro interno ao criar carrinho',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async calculatePriceCart(cartId: number) {
    try {
      const cart = await this.prisma.cart.findUnique({
        where: { id: cartId },
        include: {
          items: true,
        },
      });

      if (!cart) {
        return {
          success: false,
          message: 'Carrinho não encontrado',
          statusCode: HttpStatus.NOT_FOUND,
        };
      }

      const productIds = cart.items.map((item) => item.productId);

      const searchProducts = await this.productsService.listProducts();
    } catch (error) {}
  }
}
