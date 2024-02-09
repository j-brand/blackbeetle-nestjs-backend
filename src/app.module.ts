import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { StoryModule } from './story/story.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [BlogModule, StoryModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
