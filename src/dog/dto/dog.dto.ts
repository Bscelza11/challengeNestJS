import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DogDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  race: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  color: string;
}

export class CreateDogDto {
  @IsNotEmpty()
  race: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  color: string;
}
export class UpdateDogDto {
  @IsNotEmpty()
  @IsNumber()
  age: number;
}
