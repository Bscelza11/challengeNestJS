import { IsNumber, IsNotEmpty, isNotEmpty } from 'class-validator';

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

export class findOne {
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  race: string;
}
