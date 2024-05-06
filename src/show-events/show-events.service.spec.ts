import { Test, TestingModule } from '@nestjs/testing';
import { ShowEventsService } from './show-events.service';

describe('ShowEventsService', () => {
  let service: ShowEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowEventsService],
    }).compile();

    service = module.get<ShowEventsService>(ShowEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
