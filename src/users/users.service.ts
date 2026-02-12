import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Bright Munemu',
      email: 'brightmunemu@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Destiny Oghenerouna',
      email: 'zoeyydad@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Theophilus Ukuyoma',
      email: 'theo4biz@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Mary Sokoh',
      email: 'marysokoh4@gmail.com',
      role: 'DESIGNER',
    },
    {
      id: 5,
      name: 'Favour Oghenevwegba Ashunaira',
      email: 'marysokoh4@gmail.com',
      role: 'INTERN',
    },
  ];

  getAllUsers(role?: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => (b.id = a.id));
    const newuser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newuser);
    return newuser;
  }

  updateUser(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.getUser(id);
  }

  deleteUser(id: number) {
    const deletedUser = this.getUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
