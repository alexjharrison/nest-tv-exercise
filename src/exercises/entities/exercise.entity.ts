import { DifficultyLevel } from 'src/difficulty-levels/entities/difficulty-level.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => DifficultyLevel, (difficulty) => difficulty.exercises)
  difficulty: DifficultyLevel;
}
