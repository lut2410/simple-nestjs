import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogResolver } from './dog.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from '../entity/dog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  providers: [DogResolver, DogService]
})
export class DogModule {}
