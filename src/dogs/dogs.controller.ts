import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Dog } from 'src/entity/dogs.entity';
import { DogsService } from './dogs.service';
import { DogDto } from './interfaces/dog.dto';

@Controller('dogs')
export class DogsController {
    constructor(
        private readonly dogService: DogsService,
      ) {}
    @Get()
    getDogs() {
        return this.dogService.findAll();
        // return 'we get all dogs';
    }

    @Post()
    create(@Body() dogDto: DogDto): Promise<Dog> {
        return this.dogService.add(dogDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        let id_int = Number(id);
        return this.dogService.findOne(id_int);
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `we update the dog with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `we delete the dog with the id ${id}`;
    }
}