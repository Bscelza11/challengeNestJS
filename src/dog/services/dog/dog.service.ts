import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  find(dogId: number) {
    return `find is working, and the dogId parameter is ${dogId}`;
  }
  findOne(age: number, race: string) {
    return `findOne function with params age: ${age} & race: ${race}`;
  }
  findAll() {
    return 'findAll function getting all dogs';
  }
  create(age: number, race: string, color: string) {
    return `create function with properties, race: ${race}, age: ${age} & color: ${color}`;
  }
  update(dogId: number, age: number) {
    return `update function dog with id: ${dogId} & property, age: ${age}`;
  }
  delete(dogId: number) {
    return `delete function dog with id: ${dogId}`;
  }
}
