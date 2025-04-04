import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  createComment(@Body() commentData: CreateCommentDto) {
    return this.commentService.createComment(commentData);
  }

  @Get()
  findAllComments() {
    return this.commentService.findAllComments();
  }

  @Get(':id')
  findCommentById(@Param('id') id: string) {
    return this.commentService.findCommentById(id);
  }
}
