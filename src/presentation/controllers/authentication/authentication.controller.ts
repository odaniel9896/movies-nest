import {
  Body,
  Controller,
  NotFoundException,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthenticationDto } from 'src/presentation/dtos';
import { AuthenticationService } from 'src/usecases/authentication/authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post()
  @UseInterceptors(NotFoundException)
  async authentication(@Body() { email, password }: AuthenticationDto) {
    const user = await this.authService.findUserByEmailAndPassword(
      email,
      password,
    );
    return user;
  }
}
