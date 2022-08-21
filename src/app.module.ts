import { Module } from '@nestjs/common';
import { AuthenticationModule } from 'src/usecases/authentication/authentication.module';
import { RegisterModule } from 'src/usecases/register/register.module';

@Module({
  imports: [AuthenticationModule, RegisterModule],
})
export class AppModule {}
