import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  /* find(dogId: number) {
    return `return dog ${dogId}`;
  }*/
  findOne(age: number, race: string) {
    return `return ${race} and ${age} dog`;
  }
  findAll(): any {
    return 'return all dog';
  }
  create(age: number, race: string, color: string) {
    return `create dog with ${race}, ${color} and ${age}`;
  }
  update(dogId: number) {
    return `return updates a ${dogId} dog`;
  }
  delete(dogId: number) {
    return `return delete a ${dogId} dog`;
  }
}
