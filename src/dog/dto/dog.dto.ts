import { IsNumber, IsNotEmpty } from 'class-validator';

export class DogDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  race: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

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
