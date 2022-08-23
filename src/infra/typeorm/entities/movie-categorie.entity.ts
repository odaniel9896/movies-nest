import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('rel_movie_categorie')
export class MovieCategorie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  categorie_id: number;

  @Column({ nullable: false })
  movie_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
