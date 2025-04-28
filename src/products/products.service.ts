import { Injectable, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(createProductDto: CreateProductDto) {
    try {
      if (createProductDto.value <= 0) {
        return {
          success: false,
          message: 'O valor do produto deve ser positivo.',
          statusCode: HttpStatus.BAD_REQUEST,
        };
      }

      const product = await this.prisma.product.create({
        data: {
          name: createProductDto.name,
          value: createProductDto.value,
          quantity: createProductDto.quantity,
        },
      });

      return {
        success: true,
        message: 'Produto criado com sucesso.',
        data: product,
        statusCode: HttpStatus.CREATED,
      };
    } catch (error) {
      console.error('Erro ao criar produto:', error.message);
      return {
        message: 'Erro ao criar o produto. Tente novamente.',
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async listProducts() {
    try {
      const products = await this.prisma.product.findMany();
      return {
        success: true,
        data: products,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      console.error('Erro ao listar produtos:', error.message);
      return {
        message: 'Erro ao listar produtos. Tente novamente.',
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async listProductsById(productId: number) {
    try {
      const getProductId = await this.prisma.product.findMany({
        where: {
          id: productId,
        },
      });
      return {
        success: true,
        data: productId,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {}
  }
}
