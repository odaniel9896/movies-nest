import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/infra/typeorm/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}

  async load(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }
}
