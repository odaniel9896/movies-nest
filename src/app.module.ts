import { Module } from '@nestjs/common';
import { AuthenticationModule } from 'src/usecases/authentication/authentication.module';
import { RegisterModule } from 'src/usecases/register/register.module';
import { MovieModule } from './usecases/movie/movie.module';

@Module({
  imports: [AuthenticationModule, RegisterModule, MovieModule],
})
export class AppModule {}
