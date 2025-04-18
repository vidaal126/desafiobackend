import { IsNotEmpty, IsString, MaxLength, Matches } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(11, { message: 'O CPF deve ter no máximo 11 dígitos', each: true })
  @Matches(/^\d{11}$|^\S+@\S+\.\S+$/, {
    message:
      'O identificador deve ser um CPF válido (11 dígitos) ou um email válido',
  })
  identifier: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
