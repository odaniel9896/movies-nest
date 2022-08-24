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
import { Category } from './category.entity';
import { Movie } from './movie.entity';

@Entity('rel_movie_category')
export class MovieCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  @Column({})
  movie_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Movie, (movie) => movie.movieToCategories)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(() => Category, (category) => category.categoriesToMovie)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
