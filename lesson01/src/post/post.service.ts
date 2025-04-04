import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: CreatePostDto) {
    return this.prisma.post.create({ data });
  }

  async findAllPosts() {
    return this.prisma.post.findMany({ include: { author: true, comments: true } });
  }

  async findPostById(id: string) {
    const post = await this.prisma.post.findUnique({ where: { id }, include: { author: true, comments: true } });
    if (!post) throw new NotFoundException(`Post with ID ${id} not found`);
    return post;
  }
}
