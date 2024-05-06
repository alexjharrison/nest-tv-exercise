import { Module } from '@nestjs/common';
import { DifficultyLevelsService } from './difficulty-levels.service';
import { DifficultyLevelsController } from './difficulty-levels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DifficultyLevel } from './entities/difficulty-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DifficultyLevel])],
  controllers: [DifficultyLevelsController],
  providers: [DifficultyLevelsService],
})
export class DifficultyLevelsModule {}
