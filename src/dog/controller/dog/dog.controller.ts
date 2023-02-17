import { Controller, Get } from '@nestjs/common';
import {
  Body,
  Delete,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common/decorators';
import { DogService } from 'src/dog/services/dog/dog.service';

@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}

  /*@Get()
  find(@Param('dogId') dogId: number) {
    this.dogService.find(dogId);
  }*/
  @Get('/findOne?age=&race=')
  findOne(@Query('age') age: number, @Query('race') race: string) {
    this.dogService.findOne(age, race);
  }

  @Get()
  findAll() {
    this.dogService.findAll();
  }
  @Post()
  create(
    @Body('race') race: string,
    @Body('age') age: number,
    @Body('color') color: string,
  ) {
    this.dogService.create(age, race, color);
  }

  @Patch('/:dogId')
  update(@Param('dogId') dogId: number) {
    this.dogService.update(dogId);
  }
  @Delete('/:dogId')
  delete(@Param('dogId') dogId: number) {
    this.dogService.delete(dogId);
  }
}
