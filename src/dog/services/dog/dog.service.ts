import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { CreateDogDto, UpdateDogDto } from 'src/dog/dto/dog.dto';
import { Dog } from 'src/entities';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog) private readonly dogRepository: Repository<Dog>,
  ) {}
  find(dogId: number) {
    console.log(dogId);
    return this.dogRepository.findOneBy({
      id: dogId,
    });
  }
  findOne(age: number, race: string) {
    return this.dogRepository.findOne({
      where: {
        age: age,
        race: race,
      },
    });
  }
  findAll() {
    return this.dogRepository.find();
  }
  create(createDogDto: CreateDogDto) {
    const newDog = this.dogRepository.create(createDogDto);
    return this.dogRepository.save(newDog);
  }

  update(updateDogDto: UpdateDogDto, idDog: number) {
    return this.dogRepository.save({
      id: idDog,
      ...updateDogDto,
    });
  }

  delete(idDog: number) {
    return this.dogRepository.delete({ id: idDog });
  }
}
