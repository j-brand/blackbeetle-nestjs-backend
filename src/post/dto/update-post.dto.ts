import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
	title: string;
	type: ["html", "map", "video", "image"];
	content: string;
	story_id: number;
}
