import { Controller, Get, UseGuards } from '@nestjs/common';
import { Category } from 'src/domain/models';
import { JwtAuthGuard } from 'src/usecases/authentication/jwt-auth.guard';
import { CategoryService } from 'src/usecases/categorie/category.service';

@Controller('categorie')
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async load(): Promise<Category[]> {
    return await this.categoryService.load();
  }
}
