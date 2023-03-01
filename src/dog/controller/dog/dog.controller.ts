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
  @Get('/findOne') findOne(
    @Query('age') age: number,
    @Query('race') race: string,
  ) {
    return this.dogService.findOne(age, race);
  }

  @Get('/:dogId')
  find(@Param('dogId') dogId: number) {
    return this.dogService.find(dogId);
  }

  @Get()
  findAll() {
    return this.dogService.findAll();
  }

  @Post()
  create(
    @Body('race') race: string,
    @Body('age') age: number,
    @Body('color') color: string,
  ) {
    return this.dogService.create(age, race, color);
  }

  @Patch('/:dogId')
  update(@Param('dogId') dogId: number, @Body('age') age: number) {
    return this.dogService.update(dogId, age);
  }
  @Delete('/:dogId')
  delete(@Param('dogId') dogId: number) {
    return this.dogService.delete(dogId);
  }
}
