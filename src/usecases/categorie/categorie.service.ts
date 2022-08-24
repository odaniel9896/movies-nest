import { Inject, Injectable } from '@nestjs/common';
import { Categorie } from 'src/infra/typeorm/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {
  constructor(
    @Inject('CATEGORIE_REPOSITORY')
    private categorieRepository: Repository<Categorie>,
  ) {}

  async load(): Promise<Categorie[]> {
    return await this.categorieRepository.find();
  }
}
