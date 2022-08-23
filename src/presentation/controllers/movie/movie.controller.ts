import { Body, Controller, Post } from '@nestjs/common';
import { CreateMovieDto } from 'src/presentation/dtos/movie-dto';
import { MovieService } from 'src/usecases/movie/movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(@Body() params: CreateMovieDto) {
    const movieId = await this.movieService.create(params);
    return { id: movieId };
  }
}
