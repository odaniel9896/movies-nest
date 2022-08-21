import { Module } from '@nestjs/common';
import { AuthenticationModule } from 'src/usecases/authentication/authentication.module';

@Module({
  imports: [AuthenticationModule],
})
export class AppModule {}
