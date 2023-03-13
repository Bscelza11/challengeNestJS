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
    const dogIndex = DOGS.findIndex((dog) => dog.id == dogId);
    if (dogIndex > -1) {
      const updateDog = { ...DOGS[dogIndex], age };
      DOGS[dogIndex] = updateDog;
      return updateDog;
    }
  }
  delete(dogId: number) {
    const dogDelete = DOGS.findIndex((dog) => dog.id == dogId);
    console.log(dogDelete);
    if (dogDelete !== -1) {
      DOGS.splice(dogDelete, 1);
      console.log(DOGS);
      return 'Dog deleted succesfully';
    }
  }
}
