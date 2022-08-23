import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { Movie } from 'src/domain/models';
import { CreateMovieDto, FindChipDto } from 'src/presentation/dtos/movie-dto';
import { MovieService } from 'src/usecases/movie/movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(@Body() params: CreateMovieDto): Promise<{ id: number }> {
    const movieId = await this.movieService.create(params);
    return { id: movieId };
  }

  @Get()
  async load(): Promise<Movie[]> {
    return await this.movieService.loadAllMovies();
  }

  @Get(':id')
  @UseInterceptors(NotFoundException)
  async findOne(@Param() { id }: FindChipDto): Promise<Movie> {
    return await this.movieService.loadMovie(id);
  }
}
