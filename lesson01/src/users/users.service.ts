import { Injectable } from '@nestjs/common';

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
  findAll(name?: string, age?: number, role?: 'INTERN' | 'ADMIN' | 'USER') {
    return this.users.filter(user => {
      return (
        (name ? user.name.includes(name) : true) &&
        (age ? user.age === age : true) &&
        (role ? user.role === role : true)
      );
    });
  }

  // Find a user by ID
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return { message: `User with ID ${id} not found` };
    }
    return user;
  }
  

  // Create a new user
  create(user: User) {
    this.users.push(user);
    return user;
  }

  // Update an existing user by ID
  update(id: number, userData: Partial<User>) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...userData };
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
