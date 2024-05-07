import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { ExercisesModule } from './exercises/exercises.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowEventsModule } from './show-events/show-events.module';
import { DifficultyLevelsModule } from './difficulty-levels/difficulty-levels.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'TV',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TvShowsModule,
    ExercisesModule,
    UsersModule,
    ShowEventsModule,
    DifficultyLevelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
