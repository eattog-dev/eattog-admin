import { Controller, Get, Post, Param, Put, Delete, Body, UseGuards, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { RestauranteDTO } from './dto/restaurante.dto';
import { RestauranteEntity } from './restaurante.entity';
import { RestauranteService } from './restaurante.service';
import { DeleteResult } from 'typeorm';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/users/upload.service';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/users/enum/user-type.enum';

@Controller()
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService, private readonly uploadService: UploadService) { }

  @Get('/restaurantes')
  getRestaurantes(): Promise<RestauranteEntity[]> {
    return this.restauranteService.getRestaurantes();
  }

  @Roles(UserType.Restaurante, UserType.Admin)
  @Post('criar/restaurante')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'imagem', maxCount: 1 },
    { name: 'banner', maxCount: 1 },
    { name: 'logo', maxCount: 1 },
  ]))
  async createRestaurante(@Body() restaurante: RestauranteDTO, @UploadedFiles() file: { imagem: Express.Multer.File[], banner: Express.Multer.File[], logo: Express.Multer.File[] }
  ): Promise<RestauranteEntity> {
    let imagemPath = ''
    let bannerPath = ''
    let logoPath = ''
    if (file) {
      imagemPath = await this.uploadService.uploadFile(file.imagem[0]);
      bannerPath = await this.uploadService.uploadFile(file.banner[0]);
      logoPath = await this.uploadService.uploadFile(file.logo[0]);

    }
    return await this.restauranteService.createRestaurante(restaurante, imagemPath, bannerPath, logoPath);
  }

  @Get('restaurante/:id')
  getRestaurante(@Param('id') id: number): Promise<RestauranteEntity> {
    return this.restauranteService.getRestaurante(id);
  }

  @Put('atualizar/restaurante/:id')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'banner', maxCount: 1 },
    { name: 'logo', maxCount: 1 },
    { name: 'imagem', maxCount: 1 },
  ]))
  async editRestaurante(
    @Param('id') id: number,
    @Body() restaurante: RestauranteDTO,
    @UploadedFiles() file: { banner: Express.Multer.File[], logo: Express.Multer.File[], imagem: Express.Multer.File[] }
  ): Promise<RestauranteEntity> {
    let imagemPath = ''
    let bannerPath = ''
    let logoPath = ''
    if (file) {
      imagemPath = await this.uploadService.uploadFile(file.imagem[0]);
      bannerPath = await this.uploadService.uploadFile(file.banner[0]);
      logoPath = await this.uploadService.uploadFile(file.logo[0]);

    }
    return this.restauranteService.editRestaurante(id, restaurante, imagemPath, bannerPath, logoPath);
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
