import { Module } from '@nestjs/common';
import { DogController } from './controller/dog/dog.controller';
import { DogService } from './services/dog/dog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
