import { Test, TestingModule } from '@nestjs/testing';
import { DifficultyLevelsService } from './difficulty-levels.service';

describe('DifficultyLevelsService', () => {
  let service: DifficultyLevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DifficultyLevelsService],
    }).compile();

    service = module.get<DifficultyLevelsService>(DifficultyLevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
