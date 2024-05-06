import { TvShow } from 'src/tv-shows/entities/tv-show.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShowEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => TvShow, (show) => show.showEvents)
  show: TvShow;
}
