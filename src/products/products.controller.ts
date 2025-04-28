import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { get } from 'http';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get('listProducts')
  async listProducts() {
    return this.productsService.listProducts();
  }

  @Get('listProductsById')
  async listProductsById(@Body() listProductsById: number) {
    return this.productsService.listProductsById(listProductsById);
  }
}
