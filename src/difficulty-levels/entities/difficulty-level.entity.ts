import { Exercise } from 'src/exercises/entities/exercise.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DifficultyLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  difficultyNumber: number;

  @Column()
  difficultyName: string;

  @Column({})
  difficultyDescription?: string;

  @OneToMany(() => Exercise, (ex) => ex.difficulty)
  exercises: Exercise[];
}
