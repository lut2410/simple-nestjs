import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Dog } from '../entity/dogs.entity';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

const mokedDog: Dog = plainToClass(Dog, {id: 0, name:"Name", age: 2, breed: "breed"});

describe('DogsService', () => {
  let service: DogsService;

  let dto =  {name:"Name", age:10, breed: "Bre"};

  let dogsService = {
    findOne: jest.fn((id)=>{
      console.log('hihihi')
      return {id:id,...dto};
    }),
  };
  const dogsRepo = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsService, {
        provide: getRepositoryToken(Dog),
        useValue: dogsRepo,
      },
    {
      provide: DogsService,
      useValue: dogsService
    }],
    }).compile();

    service = module.get<DogsService>(DogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  // it('should find a dogs', () => {
  //   expect(service.findOne('1')).toEqual({
  //     id: '1',
  //     ...dto
  //   });
  // });
});
