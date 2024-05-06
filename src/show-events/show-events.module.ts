import { Module } from '@nestjs/common';
import { ShowEventsService } from './show-events.service';
import { ShowEventsController } from './show-events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowEvent } from './entities/show-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShowEvent])],
  controllers: [ShowEventsController],
  providers: [ShowEventsService],
})
export class ShowEventsModule {}
