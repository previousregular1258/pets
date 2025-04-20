import { Module } from '@nestjs/common';
import { CatsModule } from 'pets-lib';
import { DatabaseModule } from './database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule, CatsModule],
})
export class AppModule {}
