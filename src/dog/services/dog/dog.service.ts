import { Injectable } from '@nestjs/common';
import { DOGS } from 'src/dog/datasource/dogs';

@Injectable()
export class DogService {
  find(dogId: number) {
    return DOGS.find((dog) => dog.id == dogId);
  }
  findOne(age: number, race: string) {
    return DOGS.find((dog) => dog.age == age && dog.race == race);
  }
  findAll() {
    return DOGS;
  }
  create(age: number, race: string, color: string) {
    const id = DOGS.length + 1;
    const dogAdd = { id: id, age: age, race: race, color: color };
    DOGS.push(dogAdd);
    return dogAdd;
  }
  update(dogId: number, age: number) {
    const newDog = { dogId, age };
    DOGS.map((dog) => (dog.id == dogId ? newDog : dog));
    return newDog;
  }
  delete(dogId: number) {
    const dogDelete = DOGS.findIndex((dog) => dog.id == dogId);
    console.log(dogDelete);
    if (dogDelete !== -1) {
      DOGS.splice(dogDelete, 1)[0];
      console.log(DOGS);
      return 'Dog deleted succesfully';
    }
  }
}
