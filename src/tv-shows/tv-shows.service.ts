import { Injectable } from '@nestjs/common';
import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowDto } from './dto/update-tv-show.dto';
import { TvShow } from './entities/tv-show.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TvShowsService {
  constructor(
    @InjectRepository(TvShow) private tvShowsRepository: Repository<TvShow>,
  ) {}

  create(createTvShowDto: CreateTvShowDto) {
    return 'This action adds a new tvShow';
  }

  findAll() {
    return this.tvShowsRepository.find();
  }

  findOne(id: number) {
    return this.tvShowsRepository.findBy({ id });
  }

  update(id: number, updateTvShowDto: UpdateTvShowDto) {
    return `This action updates a #${id} tvShow`;
  }

  async remove(id: number) {
    await this.tvShowsRepository.delete(id);
  }
}
