import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StoryModule } from './story/story.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [StoryModule,
		TypeOrmModule.forRoot(),
	],
	controllers: [AppController],
	providers: [AppService],
})

export class AppModule { }
