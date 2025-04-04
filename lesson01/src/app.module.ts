import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './users/users.service';
import { UserController } from './users/users.controller';
import { PostService } from './post/post.service';
import { PostController } from './post/post.controller';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';

@Module({
  providers: [PrismaService, UserService, PostService, CommentService],
  controllers: [UserController, PostController, CommentController],
})
export class AppModule {}
