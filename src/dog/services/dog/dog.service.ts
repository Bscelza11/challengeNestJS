import { Injectable } from '@nestjs/common';
import { DOGS } from 'src/dog/datasource/dogs';

@Injectable()
export class DogService {
  find(dogId: number) {
    let d: any;
    DOGS.forEach((dog) => {
      if (dog.id == dogId) {
        d = dog;
      }
    });
    return d;
  }
  findOne(age: number, race: string) {
    let d: any;
    DOGS.forEach((dog) => {
      if (dog.age == age && dog.race == race) {
        d = dog;
      }
    });
    return d;
  }
  findAll() {
    return DOGS;
  }
  create(age: number, race: string, color: string) {
    const id = DOGS.reduce((maxId, dog) => Math.max(maxId, dog.id), 0) + 1;
    const dogAdd = { id: id, age: age, race: race, color: color };
    DOGS.push(dogAdd);
    return dogAdd;
  }
  update(dogId: number, age: number) {
    let d: any;
    DOGS.forEach((dog) => {
      if (dog.id == dogId) {
        dog.age = age;
        d = dog;
      }
    });
    return d;
  }
  delete(dogId: number) {
    const d = DOGS.findIndex((dog) => dog.id === Number(dogId));
    if (d !== -1) {
      DOGS.splice(d, 1)[0];
      console.log(DOGS);
      return 'Dog deleted succesfully';
    } else {
      return 'Sorry';
    }
  }
}
