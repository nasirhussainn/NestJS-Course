import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Prisma } from '@prisma/client';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  createComment(@Body() commentData: Prisma.CommentCreateInput) {
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
