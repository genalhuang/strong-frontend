import { Post as PostSchema } from "./post.model";
import { ModelType } from "@typegoose/typegoose/lib/types";
declare class CreatePostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    private readonly postModel;
    constructor(postModel: ModelType<PostSchema>);
    index(): Promise<import("@typegoose/typegoose/lib/types").DocumentType<PostSchema>[]>;
    create(createPostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<PostSchema>>;
    update(id: string, updatePostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        success: boolean;
    }>;
}
export {};
