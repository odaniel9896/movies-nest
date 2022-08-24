import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Category, Movie } from 'src/infra/typeorm/entities';
import { MovieCategory } from 'src/infra/typeorm/entities/movie-category.entity';
import { CreateMovieDto, UpdateChipDto } from 'src/presentation/dtos/movie-dto';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private movieRepository: Repository<Movie>,
    @Inject('MOVIE_CATEGORY_REPOSITORY')
    private movieCategoryRepository: Repository<MovieCategory>,
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}

  async create({
    categories,
    name,
    trailer_link,
    release_date,
  }: CreateMovieDto): Promise<number> {
    const { identifiers } = await this.movieRepository.insert({
      name,
      trailer_link,
      release_date,
    });

    const categoriesId = await this.categoryRepository.find({
      select: { id: true },
    });

    const formattedCategoriesId = categoriesId.map(({ id }) => id);

    const verifyCategorieIdIsValid = categories.some(
      (id) => !formattedCategoriesId.includes(id),
    );

    if (verifyCategorieIdIsValid)
      throw new NotFoundException('category not found');

    categories.forEach(
      async (category_id) =>
        await this.movieCategoryRepository.insert({
          movie_id: identifiers[0].id,
          category_id,
        }),
    );

    return identifiers[0].id;
  }

  async loadAllMovies(): Promise<Movie[]> {
    const movies = await this.movieRepository.find({
      relations: {
        movieToCategories: {
          category: true,
        },
      },
    });
    return movies;
  }

  async loadMovie(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({
      relations: {
        movieToCategories: {
          category: true,
        },
      },
      where: { id },
    });
    if (!movie) throw new NotFoundException('movie not found');
    return movie;
  }

  async deleteMovie(id: number): Promise<number> {
    await this.movieCategoryRepository.delete({ movie_id: id });
    const { affected } = await this.movieRepository.delete(id);
    if (affected === 0) throw new NotFoundException('movie not found');
    return affected;
  }

  async updateMovie(id: number, movieData: UpdateChipDto): Promise<number> {
    const movie = await this.movieRepository.findOneBy({ id });
    if (!movie) throw new NotFoundException('movie not found');
    const { affected } = await this.movieRepository.update(
      { id },
      { ...movieData },
    );
    return affected[0];
  }
}
