import { Injectable } from '@nestjs/common';
import { CreateShowEventDto } from './dto/create-show-event.dto';
import { UpdateShowEventDto } from './dto/update-show-event.dto';

@Injectable()
export class ShowEventsService {
  create(createShowEventDto: CreateShowEventDto) {
    return 'This action adds a new showEvent';
  }

  findAll() {
    return `This action returns all showEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} showEvent`;
  }

  update(id: number, updateShowEventDto: UpdateShowEventDto) {
    return `This action updates a #${id} showEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} showEvent`;
  }
}
