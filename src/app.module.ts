import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, AuthModule, DatabaseModule],
  providers: [UsersService],
})
export class AppModule {}
