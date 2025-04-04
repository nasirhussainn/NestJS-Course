import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { NotFoundException } from '@nestjs/common';

export interface User {
    id: number;
    name: string;
    age: number;
    role: 'INTERN' | 'ADMIN' | 'USER';
}

@Injectable()
export class UsersService {
    private users: User[] = [];

    // Find all users (with optional filtering by query)
    // Find all users (with optional filtering by query)
    findAll(name?: string, age?: number, role?: 'INTERN' | 'ADMIN' | 'USER') {
        const filteredUsers = this.users.filter(user => {
            return (
                (name ? user.name.includes(name) : true) &&
                (age ? user.age === age : true) &&
                (role ? user.role === role : true)
            );
        });

        if (filteredUsers.length === 0) {
            throw new NotFoundException('No users found matching the given criteria');
        }

        return filteredUsers;
    }

    // Find a user by ID
    findOne(id: number) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }


    // Create a new user
    create(createUserDto: CreateUserDto) {
        this.users.push(createUserDto);
        return createUserDto;
    }

    // Update an existing user by ID
    update(id: number, updateUserDto: UpdateUserDto) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
            return this.users[userIndex];
        }
        return null;
    }

    // Remove a user by ID
    remove(id: number) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const [removedUser] = this.users.splice(userIndex, 1);
            return removedUser;
        }
        return null;
    }
}
