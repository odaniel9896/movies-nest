import { DataSource } from 'typeorm';
import { Movie } from '../entities';

export const movieProvider = [
  {
    provide: 'MOVIE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Movie),
    inject: ['DATA_SOURCE'],
  },
];
