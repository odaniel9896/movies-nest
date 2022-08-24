import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/infra/typeorm/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categorieRepository: Repository<Category>,
  ) {}

  async load(): Promise<Category[]> {
    return await this.categorieRepository.find();
  }
}
