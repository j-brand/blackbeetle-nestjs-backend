// main.seeder.ts
import { Post } from '../../post/entities/post.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class PostSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const postFactory = factoryManager.get(Post);

    const posts = await postFactory.saveMany(7);
  }
}
