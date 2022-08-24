import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Movie } from 'src/domain/models';
import { CreateMovieDto, FindChipDto } from 'src/presentation/dtos/movie-dto';
import { JwtAuthGuard } from 'src/usecases/authentication/jwt-auth.guard';
import { MovieService } from 'src/usecases/movie/movie.service';

@UseGuards(JwtAuthGuard)
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

  @Delete(':id')
  async delete(@Param() { id }: FindChipDto) {
    return await this.movieService.deleteMovie(id);
  }
}
