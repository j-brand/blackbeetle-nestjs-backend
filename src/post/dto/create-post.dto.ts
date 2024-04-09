export class CreatePostDto {

	title: string;
	type: ["html", "map", "video", "image"];
	content: string;
	story_id: number;

}
