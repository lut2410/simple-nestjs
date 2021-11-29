import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDogInput } from './dto/create-dog.input';
import { UpdateDogInput } from './dto/update-dog.input';
import { Dog } from '../entity/dog.entity';

@Injectable()
export class DogService {
  constructor(
  @InjectRepository(Dog)
  private dogsRepository: Repository<Dog>,
) {}

  create(createDogInput: CreateDogInput) {
    let dog= this.dogsRepository.create(createDogInput);
    return this.dogsRepository.save(dog);
  }

  findAll() {
    return this.dogsRepository.find();
  }

  findOne(id: number) {
    console.log('xxx');
    return this.dogsRepository.findOne(id);
  }

  update(id: number, updateDogInput: UpdateDogInput) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
