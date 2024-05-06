import { Test, TestingModule } from '@nestjs/testing';
import { DifficultyLevelsController } from './difficulty-levels.controller';
import { DifficultyLevelsService } from './difficulty-levels.service';

describe('DifficultyLevelsController', () => {
  let controller: DifficultyLevelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DifficultyLevelsController],
      providers: [DifficultyLevelsService],
    }).compile();

    controller = module.get<DifficultyLevelsController>(DifficultyLevelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
