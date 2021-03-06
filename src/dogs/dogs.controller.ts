import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
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
    create(@Body() dogDto: DogDto) {
        return this.dogService.add(dogDto);
        return dogDto;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `we get the dog with the id ${id}`;
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