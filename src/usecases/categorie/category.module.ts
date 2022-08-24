import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/typeorm/config/database.module';
import { categoryProvider } from 'src/infra/typeorm/providers';
import { CategoryController } from 'src/presentation/controllers/category/category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CategoryService, ...categoryProvider],
})
export class CategorieModule {}
