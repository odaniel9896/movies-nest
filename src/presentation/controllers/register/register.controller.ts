import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from 'src/presentation/dtos';
import { RegisterService } from 'src/usecases/register/register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async register(@Body() params: RegisterDto) {
    const user = await this.registerService.register(params);
    return { id: user.identifiers[0].id };
  }
}
