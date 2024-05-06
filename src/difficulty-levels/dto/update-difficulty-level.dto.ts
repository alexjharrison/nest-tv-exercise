import { PartialType } from '@nestjs/mapped-types';
import { CreateDifficultyLevelDto } from './create-difficulty-level.dto';

export class UpdateDifficultyLevelDto extends PartialType(CreateDifficultyLevelDto) {}
