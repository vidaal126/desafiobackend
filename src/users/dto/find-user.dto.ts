import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindUserDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  identifier: string;

  @IsOptional()
  @IsInt()
  user_id: number;
}
