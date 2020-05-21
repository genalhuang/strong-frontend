import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import {Post as PostSchema} from "./post.model";
import {IsNotEmpty} from 'class-validator'
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";

class CreatePostDto {
    @ApiModelProperty({description: '帖子标题', example: '帖子标题1'})
    // 是否不为空
    @IsNotEmpty({message: '请填写标题'})
    title: string
    @ApiModelProperty({description: '帖子内容', example: '帖子内容1'})
    content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    constructor(
        @InjectModel(PostSchema) private readonly  postModel: ModelType<PostSchema>
    ) {
    }

    @Get()
    @ApiOperation({summary: '显示博客列表'})
    async index() {
        return await this.postModel.find()
    }

    @Post()
    @ApiOperation({summary: '创建帖子'})
    async create(@Body() createPostDto: CreatePostDto) {
        // @Body 参数装饰器 等同于以前的req.body

        await this.postModel.create(createPostDto)
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({summary: '博客詳情'})
    async detail(@Param('id') id: string) {
        return await this.postModel.findById(id);
    }

    @Put(':id')
    @ApiOperation({summary: '编辑帖子'})
    async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
        await this.postModel.findByIdAndUpdate(id, updatePostDto);
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({summary: '删除帖子'})
    async remove(@Param('id') id: string) {
        await this.postModel.findByIdAndDelete(id)
        return {
            id: id,
            success: true
        }
    }

}
