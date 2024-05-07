import { Injectable } from '@nestjs/common';
import { CreateDifficultyLevelDto } from './dto/create-difficulty-level.dto';
import { UpdateDifficultyLevelDto } from './dto/update-difficulty-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DifficultyLevel } from './entities/difficulty-level.entity';

@Injectable()
export class DifficultyLevelsService {
  constructor(
    @InjectRepository(DifficultyLevel)
    private difficultyLevelsRepository: Repository<DifficultyLevel>,
  ) {}

  create(createDifficultyLevelDto: CreateDifficultyLevelDto) {
    return 'This action adds a new difficultyLevel';
  }

  findAll() {
    return this.difficultyLevelsRepository.find();
  }

  findOne(id: number) {
    return this.difficultyLevelsRepository.findBy({ id });
  }

  update(id: number, updateDifficultyLevelDto: UpdateDifficultyLevelDto) {
    return `This action updates a #${id} difficultyLevel`;
  }

  async remove(id: number) {
    await this.difficultyLevelsRepository.delete(id);
  }
}
