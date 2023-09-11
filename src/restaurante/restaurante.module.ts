import { Module } from '@nestjs/common';
import { RestauranteController } from './restaurante.controller'; 
import { RestauranteEntity } from './restaurante.entity'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteService } from './restaurante.service'; 

@Module({
  imports: [TypeOrmModule.forFeature([RestauranteEntity])],
  controllers: [RestauranteController],
  providers: [RestauranteService],
  exports: [RestauranteService]
})
export class RestauranteModule {}