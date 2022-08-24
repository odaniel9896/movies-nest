import { Controller, Get, UseGuards } from '@nestjs/common';
import { Categorie } from 'src/domain/models';
import { JwtAuthGuard } from 'src/usecases/authentication/jwt-auth.guard';
import { CategorieService } from 'src/usecases/categorie/categorie.service';

@Controller('categorie')
@UseGuards(JwtAuthGuard)
export class CategorieController {
  constructor(private readonly categoryService: CategorieService) {}

  @Get()
  async load(): Promise<Categorie[]> {
    return await this.categoryService.load();
  }
}
