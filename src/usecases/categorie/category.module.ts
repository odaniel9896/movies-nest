import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/typeorm/config/database.module';
import { categoryProvider } from 'src/infra/typeorm/providers';
import { CategoryController } from 'src/presentation/controllers/categorie/category.controller';
import { CategorieService } from './category.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CategorieService, ...categoryProvider],
})
export class CategorieModule {}
