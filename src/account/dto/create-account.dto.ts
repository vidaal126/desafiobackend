import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsNumber()
  numberAccount: number;

  @IsString()
  @IsNotEmpty()
  agency: string;

  @IsNumber()
  userId: number;
}
