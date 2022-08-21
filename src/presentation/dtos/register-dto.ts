import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ required: true, default: 'email@primi.com.br' })
  email: string;

  @IsString()
  @ApiProperty({ required: true, default: '123456789' })
  password: string;

  @IsString()
  @ApiProperty({ required: true, default: 'Daniel Vitor' })
  name: string;
}
