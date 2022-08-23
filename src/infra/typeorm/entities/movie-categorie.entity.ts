import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categorie } from './categorie.entity';
import { Movie } from './movie.entity';

@Entity('rel_movie_categorie')
export class MovieCategorie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categorie_id: number;

  @Column({})
  movie_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Movie, (movie) => movie.movieToCategories)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(() => Categorie, (category) => category.categoriesToMovie)
  @JoinColumn({ name: 'categorie_id' })
  categorie: Categorie;
}
