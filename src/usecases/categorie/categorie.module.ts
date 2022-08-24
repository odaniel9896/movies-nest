import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/typeorm/config/database.module';
import { categorieProvider } from 'src/infra/typeorm/providers';
import { CategorieController } from 'src/presentation/controllers/categorie/categorie.controller';
import { CategorieService } from './categorie.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategorieController],
  providers: [CategorieService, ...categorieProvider],
})
export class CategorieModule {}
