import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { RestauranteDTO } from './dto/restaurante.dto';
import { RestauranteEntity } from './restaurante.entity';
import { RestauranteService } from './restaurante.service';
import { DeleteResult } from 'typeorm';

@Controller()
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) { }

  @Get('/restaurantes')
  getRestaurantes(): Promise<RestauranteEntity[]> {
    return this.restauranteService.getRestaurantes();
  }

  @Post('criar/restaurante')
  createRestaurante(@Body() restaurante: RestauranteDTO): Promise<RestauranteEntity> {
    return this.restauranteService.createRestaurante(restaurante);
  }

  @Get('restaurante/:id')
  getRestaurante(@Param('id') id: number): Promise<RestauranteEntity> {
    return this.restauranteService.getRestaurante(id);
  }

  @Put('atualizar/restaurante/:id')
  editRestaurante(
    @Param('id') id: number,
    @Body() restaurante: RestauranteDTO
  ): Promise<RestauranteEntity> {
    return this.restauranteService.editRestaurante(id, restaurante);
  }

  @Delete('deletar/restaurante/:id')
  deleteRestaurante(@Param('id') id: number): Promise<DeleteResult> {
    return this.restauranteService.deleteRestaurante(id);
  }

}