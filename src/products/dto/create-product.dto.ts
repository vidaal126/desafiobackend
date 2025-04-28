import { IsString, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0.01, { message: 'O valor do produto deve ser maior que 0.' })
  value: number;

  @IsNumber()
  @Min(0, { message: 'A quantidade deve ser zero ou maior.' })
  quantity: number;
}
