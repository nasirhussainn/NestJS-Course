import { Body, Controller, Get, Param, Post, Query, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(
        @Query('name') name: string,
        @Query('age') age: number,
        @Query('role') role: 'INTERN' | 'ADMIN' | 'USER',
    ) {
        return this.usersService.findAll(name, +age, role);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body() user: { id: number; name: string; age: number; role: 'INTERN' | 'ADMIN' | 'USER' }) {
        return this.usersService.create(user);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() user: { name?: string; age?: number; role?: 'INTERN' | 'ADMIN' | 'USER' }) {
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.usersService.remove(id);
    }
}
