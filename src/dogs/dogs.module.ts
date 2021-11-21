import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsService } from './dogs.service';
import { Dog } from 'src/entity/dogs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  providers: [DogsService],
  controllers: [DogsController],
  exports: [TypeOrmModule]//TODO:check export
})
export class DogsModule {}