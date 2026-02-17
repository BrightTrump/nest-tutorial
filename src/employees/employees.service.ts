import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createEmployeeDto: Prisma.EmployeesCreateInput) {
    return this.databaseService.employees.create({ data: createEmployeeDto });
  }

  findAll(role?: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN') {
    if (role)
      return this.databaseService.employees.findMany({
        where: {
          role,
        },
      });
    return this.databaseService.employees.findMany();
  }

  findOne(id: number) {
    return this.databaseService.employees.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateEmployeeDto: Prisma.EmployeesUpdateInput) {
    return this.databaseService.employees
      .update({
        where: {
          id,
        },
        data: updateEmployeeDto,
      })
      .catch((error) => {
        if (error.code === 'P2025') {
          // Prisma “record not found” error
          throw new NotFoundException(`Employee with id ${id} not found`);
        }
        throw error;
      });
  }

  remove(id: number) {
    return this.databaseService.employees
      .delete({
        where: {
          id,
        },
      })
      .catch((error) => {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Employee with id ${id} not found`);
        }
        throw error;
      });
  }
}
