import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/entities';
import { CatsService } from 'src/services';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  providers: [CatsService],
  exports: [TypeOrmModule, CatsService],
})
export class CatsModule {}
