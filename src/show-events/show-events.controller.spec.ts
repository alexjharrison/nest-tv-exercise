import { Test, TestingModule } from '@nestjs/testing';
import { ShowEventsController } from './show-events.controller';
import { ShowEventsService } from './show-events.service';

describe('ShowEventsController', () => {
  let controller: ShowEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowEventsController],
      providers: [ShowEventsService],
    }).compile();

    controller = module.get<ShowEventsController>(ShowEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
