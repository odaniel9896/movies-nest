import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class AuthenticationDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ required: true, default: 'daniel@gmail.com' })
  email: string;

  @IsString()
  @ApiProperty({ required: true, default: '123456789' })
  password: string;
}
