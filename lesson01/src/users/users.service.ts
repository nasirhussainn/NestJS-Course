import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async findAllUsers() {
    return this.prisma.user.findMany({ include: { posts: true } });
  }

  async findUserById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id }, include: { posts: true } });
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return user;
  }
}
