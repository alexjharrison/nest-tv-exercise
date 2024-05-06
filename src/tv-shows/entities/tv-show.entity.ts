import { ShowEvent } from 'src/show-events/entities/show-event.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TvShow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  showName: string;

  @OneToMany(() => ShowEvent, (evt) => evt.show)
  showEvents: ShowEvent[];
}
