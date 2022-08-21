import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationDto } from 'src/presentation/dtos';

@Controller('authentication')
export class AuthenticationController {
  @Post()
  async authentication(@Body() { email, password }: AuthenticationDto) {
    console.log(email, password);
  }
}
