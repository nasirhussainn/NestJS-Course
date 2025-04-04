import { Body, Controller, Get, Param, Post, Query, Patch, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    findAll() {
        return 'This action returns a list of all users';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} user`;
    }

    @Post()
    create(@Body() user: {}) {
        return user;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() user: {}) {
        return { id, ...user }
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return { id }
    }

}
