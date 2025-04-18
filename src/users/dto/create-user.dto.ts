import { IsNotEmpty, IsString, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(11, { message: 'O CPF deve ter no máximo 11 dígitos' })
  @Matches(/^\d{11}$/, {
    message: 'O CPF deve conter exatamente 11 dígitos numéricos',
  })
  cpf: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
