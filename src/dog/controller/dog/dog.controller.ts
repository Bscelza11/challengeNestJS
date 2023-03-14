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
import { DogDto } from 'src/dog/dto/dog.dto';
import { ApiTags, ApiOkResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Dog')
@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get('/findOne')
  @ApiOkResponse({
    description: 'The dog age and race',
    type: DogDto,
    isArray: false,
  })
  findOne(@Query('age') age: number, @Query('race') race: string) {
    return this.dogService.findOne(age, race);
  }
  @Get('/:dogId')
  @ApiOkResponse({
    description: 'The dog id',
    type: DogDto,
    isArray: false,
  })
  find(@Param('dogId') dogId: number) {
    return this.dogService.find(dogId);
  }
  @Get()
  @ApiOkResponse({
    description: 'The dogs records',
    type: DogDto,
    isArray: true,
  })
  findAll() {
    return this.dogService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiBody({ description: 'The body of the request', type: CreateDogDto })
  @ApiOkResponse({
    description: 'Create new dog',
    type: CreateDogDto,
    isArray: false,
  })
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }
  @Patch(':dogId')
  @UsePipes(ValidationPipe)
  @ApiBody({ description: 'The age of the dog', type: UpdateDogDto })
  @ApiOkResponse({
    description: 'Update a dog',
    type: UpdateDogDto,
    isArray: false,
  })
  update(@Body() updateDogDto: UpdateDogDto, @Param('dogId') dogId: number) {
    return this.dogService.update(updateDogDto, dogId);
  }
  @Delete(':dogId')
  @ApiOkResponse({
    description: 'Delete a Dog',
    type: DogDto,
    isArray: false,
  })
  delete(@Param('dogId') dogId: number) {
    return this.dogService.delete(dogId);
  }
}
