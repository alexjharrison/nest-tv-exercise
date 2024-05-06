import { PartialType } from '@nestjs/mapped-types';
import { CreateShowEventDto } from './create-show-event.dto';

export class UpdateShowEventDto extends PartialType(CreateShowEventDto) {}
