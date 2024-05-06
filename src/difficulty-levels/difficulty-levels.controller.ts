import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DifficultyLevelsService } from './difficulty-levels.service';
import { CreateDifficultyLevelDto } from './dto/create-difficulty-level.dto';
import { UpdateDifficultyLevelDto } from './dto/update-difficulty-level.dto';

@Controller('difficulty-levels')
export class DifficultyLevelsController {
  constructor(private readonly difficultyLevelsService: DifficultyLevelsService) {}

  @Post()
  create(@Body() createDifficultyLevelDto: CreateDifficultyLevelDto) {
    return this.difficultyLevelsService.create(createDifficultyLevelDto);
  }

  @Get()
  findAll() {
    return this.difficultyLevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.difficultyLevelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDifficultyLevelDto: UpdateDifficultyLevelDto) {
    return this.difficultyLevelsService.update(+id, updateDifficultyLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.difficultyLevelsService.remove(+id);
  }
}
