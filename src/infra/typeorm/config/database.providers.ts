import constants from 'src/main/config/constants';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        // host: constants().database.DB_HOST,
        // port: parseInt(constants().database.DB_PORT, 10),
        //username: constants().database.DB_USERNAME,
        //password: constants().database.DB_PASSWORD,
        database: 'movies.sqlite',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
