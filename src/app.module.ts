import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';

import { StoryModule } from './story/story.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from '@src/post/post.module';

@Module({
  imports: [
    StoryModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['typeorm/migrations/**/*{.ts,.js}'],
      migrationsTableName: 'migrations',
      migrationsRun: false,
      synchronize: false,
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
