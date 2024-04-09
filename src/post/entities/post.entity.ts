import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum PostType {
	HTML = "html",
	MAP = "map",
	VIDEO = "video",
	IMAGE = "image",
}

@Entity()
export class Post {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column({
		type: "enum",
		enum: PostType,
		default: PostType.HTML
	})
	type: PostType;

	@Column()
	content: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
