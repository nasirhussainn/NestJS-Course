import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async createComment(data: Prisma.CommentCreateInput) {
    return this.prisma.comment.create({ data });
  }

  async findAllComments() {
    return this.prisma.comment.findMany({ include: { post: true } });
  }

  async findCommentById(id: string) {
    const comment = await this.prisma.comment.findUnique({ where: { id }, include: { post: true } });
    if (!comment) throw new NotFoundException(`Comment with ID ${id} not found`);
    return comment;
  }
}
