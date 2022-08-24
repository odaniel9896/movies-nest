import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/typeorm/config/database.module';
import { categoryProvider } from 'src/infra/typeorm/providers';
import { movieCategoryProvider } from 'src/infra/typeorm/providers/movie-categorie.provider';
import { movieProvider } from 'src/infra/typeorm/providers/movie.provider';
import { MovieController } from 'src/presentation/controllers/movie/movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [
    MovieService,
    ...movieProvider,
    ...movieCategoryProvider,
    ...categoryProvider,
  ],
})
export class MovieModule {}
