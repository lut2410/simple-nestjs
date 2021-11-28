import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Dog } from '../entity/dogs.entity';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { DogDto } from './interfaces/dog.dto';

const mokedDog: Dog = plainToClass(Dog, {id: 0, name:"Name", age: 2, breed: "breed"});

describe('DogsController', () => {
  let controller: DogsController;
  let service: DogsService;

  let dto:DogDto =  {name:"Name", age:10, breed: "Bre"};
  let entity:Dog =  {id:1, name:"Name", age:10, breed: "Bre"};
  const mockedRepo = {
    // mock the repo `findOneOrFail`
    findOneOrFail: jest.fn((id) => Promise.resolve(mokedDog)),
    // create: jest.fn((dog)=>{
    //   return {
    //     id:5,
    //     ...dto
    //   }
    // })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [DogsService, {
        provide: getRepositoryToken(Dog),
        useValue: mockedRepo,
      },],
    }).compile();
    // const module = await Test.createTestingModule({
    //   controllers: [DogsController],
    //   providers: [DogsService],
    // }).compile();

    controller = module.get<DogsController>(DogsController);
    service = module.get<DogsService>(DogsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
    it('should call service', () => {
      // const result: Dog[] = [entity];
      // jest.spyOn(service, 'findAll').mockImplementation(() => result);

    service.add = jest.fn().mockResolvedValue(entity);
    service.add(dto);
    expect(jest.spyOn(service, 'add' )).toHaveBeenCalledWith(dto);
    return controller.create(dto).then((sp: Dog) => {
      expect(service.add).toHaveBeenCalledWith(dto);
      console.log(sp);
      console.log(entity);
      expect(sp).toBe(entity);
    });

  });
  // it('should create a dogs', () => {
  //   expect(controller.create( dto)).toEqual({
  //     id: expect.any(Number),
  //     ...dto
  //   });
  // });
});
