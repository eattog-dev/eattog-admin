import { Controller, Get, Post, Param, Put, Delete, Body, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { RestauranteDTO } from './dto/restaurante.dto';
import { RestauranteEntity } from './restaurante.entity';
import { RestauranteService } from './restaurante.service';
import { DeleteResult } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/users/upload.service';

@Controller()
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService, private readonly uploadService: UploadService) { }

  @Get('/restaurantes')
  getRestaurantes(): Promise<RestauranteEntity[]> {
    return this.restauranteService.getRestaurantes();
  }

  @Post('criar/restaurante')
  @UseInterceptors(FileInterceptor('banner'))
  async createRestaurante(@Body() restaurante: RestauranteDTO, @UploadedFile() file: Express.Multer.File): Promise<RestauranteEntity> {
    let filePath = ''
    if (file) {
      filePath = await this.uploadService.uploadFile(file);
    }
    return this.restauranteService.createRestaurante(restaurante, filePath);
  }

  @Get('restaurante/:id')
  getRestaurante(@Param('id') id: number): Promise<RestauranteEntity> {
    return this.restauranteService.getRestaurante(id);
  }

  @Put('atualizar/restaurante/:id')
  @UseInterceptors(FileInterceptor('banner'))
  async editRestaurante(
    @Param('id') id: number,
    @Body() restaurante: RestauranteDTO,
    @UploadedFile() file: Express.Multer.File
  ): Promise<RestauranteEntity> {
    let filePath = ''
    if (file) {
      filePath = await this.uploadService.uploadFile(file);
    }
    return this.restauranteService.editRestaurante(id, restaurante, filePath);
  }

  @Delete('deletar/restaurante/:id')
  deleteRestaurante(@Param('id') id: number): Promise<DeleteResult> {
    return this.restauranteService.deleteRestaurante(id);
  }

  @Get('qtdRestaurantes/')
  quantidadeRestaurantes() {
    return this.restauranteService.qtdRestaurantes()
  }

  @Get('restaurantes/:pagina')
  restaurantesPagina(@Param('pagina') pagina: number): Promise<RestauranteEntity[]> {
    return this.restauranteService.restaurantesPorPagina(pagina);
  }

  @Get('restaurantes-prox-pagina/:pagina')
  restaurantesProxPagina(@Param('pagina') pagina: number): Promise<Boolean> {
    return this.restauranteService.verificaPaginacaoRestaurante(pagina);
  }
}
