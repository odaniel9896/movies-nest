import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Movie } from 'src/domain/models';
import {
  ChipIdDto,
  CreateMovieDto,
  UpdateChipDto,
} from 'src/presentation/dtos/movie-dto';
import { JwtAuthGuard } from 'src/usecases/authentication/jwt-auth.guard';
import { MovieService } from 'src/usecases/movie/movie.service';

@UseGuards(JwtAuthGuard)
@ApiTags('movie')
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
  async findOne(@Param() { id }: ChipIdDto): Promise<Movie> {
    return await this.movieService.loadMovie(id);
  }

  @Delete(':id')
  async delete(@Param() { id }: ChipIdDto) {
    await this.movieService.deleteMovie(id);
    return { success: true };
  }

  @Put(':id')
  async update(
    @Param() { id }: ChipIdDto,
    @Body() { name, release_date, trailer_link }: UpdateChipDto,
  ) {
    await this.movieService.updateMovie(id, {
      name,
      release_date,
      trailer_link,
    });
    return { success: true };
  }
}
