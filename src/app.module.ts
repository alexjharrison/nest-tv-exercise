import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { ExercisesModule } from './exercises/exercises.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TvShowsModule, ExercisesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
