import { DataSource } from 'typeorm';
import { MovieCategorie } from '../entities/movie-categorie.entity';

export const movieCategorieProvider = [
  {
    provide: 'MOVIE_CATEGORIE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(MovieCategorie),
    inject: ['DATA_SOURCE'],
  },
];
