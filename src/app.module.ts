import { Module } from '@nestjs/common';
import { AuthenticationModule } from 'src/usecases/authentication/authentication.module';
import { RegisterModule } from 'src/usecases/register/register.module';
import { MovieModule } from './usecases/movie/movie.module';
import { CategorieModule } from './usecases/categorie/category.module';
import { ConfigModule } from '@nestjs/config';
import constants from './main/config/constants';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [constants] }),
    AuthenticationModule,
    RegisterModule,
    MovieModule,
    CategorieModule,
  ],
})
export class AppModule {}
