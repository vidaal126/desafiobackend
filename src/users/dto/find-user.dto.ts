import { IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class FindUserDto {
  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsInt()
  user_id: number;
}
