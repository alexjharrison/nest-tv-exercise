import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from './users/entities/user.entity';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  getHello(): string {
    return 'Hello World!';
  }
  async onApplicationBootstrap() {
    // seed here

    const dbAlex = await this.entityManager.findOneBy(User, {
      firstName: 'Alex',
    });

    if (!dbAlex) await this.entityManager.save(User, { firstName: 'Alex' });
  }
}
