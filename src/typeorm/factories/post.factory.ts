// user.factory.ts
import { Faker } from '@faker-js/faker';
import { Post, PostType } from '../../post/entities/post.entity';

import { setSeederFactory } from 'typeorm-extension';

export const PostFactory = setSeederFactory(Post, (faker: Faker) => {
  const post = new Post();
  post.title = faker.internet.userName();
  post.type = faker.helpers.arrayElement([
    PostType.HTML,
    PostType.IMAGE,
    PostType.MAP,
    PostType.VIDEO,
  ]);
  post.content = faker.lorem.paragraph();
  post.created_at = faker.date.past();
  post.updated_at = faker.date.recent();

  return post;
});
