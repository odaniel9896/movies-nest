import { Inject, Injectable } from '@nestjs/common';
import { Movie } from 'src/infra/typeorm/entities';
import { MovieCategorie } from 'src/infra/typeorm/entities/movie-categorie.entity';
import { CreateMovieDto } from 'src/presentation/dtos/movie-dto';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private movieRepository: Repository<Movie>,
    @Inject('MOVIE_CATEGORIE_REPOSITORY')
    private movieCategorieRepository: Repository<MovieCategorie>,
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

    categories.forEach(
      async (categorie_id) =>
        await this.movieCategorieRepository.insert({
          movie_id: identifiers[0].id,
          categorie_id,
        }),
    );

    return identifiers[0].id;
  }

  async loadAllMovies(): Promise<Movie[]> {
    const movies = await this.movieRepository
      .createQueryBuilder('movie')
      .select([
        'movie.id',
        'movie.name',
        'movie.trailer_link',
        'movie.release_date',
        'movie.created_at',
        'movie.updated_at',
        'movieToCategories',
        'categorie',
      ])
      .leftJoin('movie.movieToCategories', 'movieToCategories')
      .leftJoin('movieToCategories.categorie', 'categorie')
      .getMany();

    return movies;
  }
}
