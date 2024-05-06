import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShowEventsService } from './show-events.service';
import { CreateShowEventDto } from './dto/create-show-event.dto';
import { UpdateShowEventDto } from './dto/update-show-event.dto';

@Controller('show-events')
export class ShowEventsController {
  constructor(private readonly showEventsService: ShowEventsService) {}

  @Post()
  create(@Body() createShowEventDto: CreateShowEventDto) {
    return this.showEventsService.create(createShowEventDto);
  }

  @Get()
  findAll() {
    return this.showEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShowEventDto: UpdateShowEventDto) {
    return this.showEventsService.update(+id, updateShowEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showEventsService.remove(+id);
  }
}
