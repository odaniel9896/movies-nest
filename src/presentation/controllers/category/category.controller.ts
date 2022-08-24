import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Category } from 'src/domain/models';
import { JwtAuthGuard } from 'src/usecases/authentication/jwt-auth.guard';
import { CategoryService } from 'src/usecases/categorie/category.service';

@Controller('category')
@ApiTags('category')
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async load(): Promise<Category[]> {
    return await this.categoryService.load();
  }
}
