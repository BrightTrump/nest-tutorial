import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'DESIGNER', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role is requested',
  })
  role: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN';
}
