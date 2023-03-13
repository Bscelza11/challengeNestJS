import { Controller, Get, Patch, ValidationPipe } from '@nestjs/common';
import {
  Body,
  Delete,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common/decorators';
import { CreateDogDto, UpdateDogDto } from 'src/dog/dto/dog.dto';
import { DogService } from 'src/dog/services/dog/dog.service';
@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get('/findOne')
  findOne(@Query('age') age: number, @Query('race') race: string) {
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
  @UsePipes(ValidationPipe)
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }
  @Patch(':dogId')
  @UsePipes(ValidationPipe)
  update(@Body() updateDogDto: UpdateDogDto, @Param('dogId') dogId: number) {
    return this.dogService.update(updateDogDto, dogId);
  }
  @Delete(':dogId')
  delete(@Param('dogId') dogId: number) {
    return this.dogService.delete(dogId);
  }
}
