export class CreateDto {
  name: string;
  email: string;
  role: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN';
}
