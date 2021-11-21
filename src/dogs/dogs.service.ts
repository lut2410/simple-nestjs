import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Dog } from '../entity/dogs.entity';
import { DogDto } from './interfaces/dog.dto';

@Injectable()
export class DogsService {
  constructor(
      private connection: Connection,//can use transaction
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}

  findAll(): Promise<Dog[]> {
    return this.dogsRepository.find();
  }

  findOne(id: string): Promise<Dog> {
    return this.dogsRepository.findOne(id);
  }

  findById(id: number): Promise<Dog> {
    return this.dogsRepository.findOne(id);
  }

  add(data: DogDto): Promise<Dog> {
      let entity: Dog = {id: 0, name:data.name, age: data.age, breed: data.breed};
    return this.dogsRepository.save(data);
  }

  async update(id: number, data: any): Promise<Dog> {
    await this.dogsRepository.update(id, data);
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.dogsRepository.delete(id);
  }
}