import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // GET /users
  @Get()
  getAllUsers(
    @Query('role') role?: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN',
  ) {
    return this.usersService.getAllUsers(role);
  }

  // GET /users/:id
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(parseInt(id));
  }

  // POST /users
  @Post()
  createUser(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.createUser(user);
  }

  // PATCH /users:id
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUser: {}) {
    return { id, ...updateUser };
  }

  // DELETE /users:id
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
