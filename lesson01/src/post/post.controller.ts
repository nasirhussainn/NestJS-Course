import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body() postData: CreatePostDto) {
    return this.postService.createPost(postData);
  }

  @Get()
  findAllPosts() {
    return this.postService.findAllPosts();
  }

  @Get(':id')
  findPostById(@Param('id') id: string) {
    return this.postService.findPostById(id);
  }
}
