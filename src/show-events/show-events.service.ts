import { Injectable } from '@nestjs/common';
import { CreateShowEventDto } from './dto/create-show-event.dto';
import { UpdateShowEventDto } from './dto/update-show-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShowEvent } from './entities/show-event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShowEventsService {
  constructor(
    @InjectRepository(ShowEvent)
    private showEventsRepository: Repository<ShowEvent>,
  ) {}

  create(createShowEventDto: CreateShowEventDto) {
    return 'This action adds a new showEvent';
  }

  findAll() {
    return this.showEventsRepository.find();
  }

  findOne(id: number) {
    return this.showEventsRepository.findBy({ id });
  }

  update(id: number, updateShowEventDto: UpdateShowEventDto) {
    return `This action updates a #${id} showEvent`;
  }

  async remove(id: number) {
    await this.showEventsRepository.delete(id);
  }
}
