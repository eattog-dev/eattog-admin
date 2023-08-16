import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { RestauranteDto } from './dto/restaurante.dto'; 
import { RestauranteEntity } from './restaurante.entity'; 
import { RestauranteService } from './restaurante.service'; 
import { DeleteResult } from 'typeorm';

@Controller('restaurantes')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) { }

  @Get('')
  getRestaurantes(): Promise<RestauranteEntity[]> {
    return this.restauranteService.getRestaurantes();
  }

  @Post('')
  createRestaurante(@Body() restaurante: RestauranteDto): Promise<RestauranteEntity> {
    return this.restauranteService.createRestaurante(restaurante);
  }

  @Get(':id')
  getRestaurante(@Param('id') id: number): Promise<RestauranteEntity> {
    return this.restauranteService.getRestaurante(id);
  }

  @Put(':id')
  editRestaurante(
    @Param('id') id: number,
    @Body() restaurante: RestauranteDto
  ): Promise<RestauranteEntity> {
    return this.restauranteService.editRestaurante(id, restaurante);
  }

  @Delete(':id')
  deleteRestaurante(@Param('id') id: number): Promise<DeleteResult> {
    return this.restauranteService.deleteRestaurante(id);
  }

}
