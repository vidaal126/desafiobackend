import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindUserDto {
  @IsString()
  @IsNotEmpty()
  identifier: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsInt()
  user_id: number;
}
