import { DataSource } from 'typeorm';
import { Categorie } from '../entities';

export const categorieProvider = [
  {
    provide: 'CATEGORIE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categorie),
    inject: ['DATA_SOURCE'],
  },
];
