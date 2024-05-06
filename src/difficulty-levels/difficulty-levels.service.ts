import { Injectable } from '@nestjs/common';
import { CreateDifficultyLevelDto } from './dto/create-difficulty-level.dto';
import { UpdateDifficultyLevelDto } from './dto/update-difficulty-level.dto';

@Injectable()
export class DifficultyLevelsService {
  create(createDifficultyLevelDto: CreateDifficultyLevelDto) {
    return 'This action adds a new difficultyLevel';
  }

  findAll() {
    return `This action returns all difficultyLevels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} difficultyLevel`;
  }

  update(id: number, updateDifficultyLevelDto: UpdateDifficultyLevelDto) {
    return `This action updates a #${id} difficultyLevel`;
  }

  remove(id: number) {
    return `This action removes a #${id} difficultyLevel`;
  }
}
