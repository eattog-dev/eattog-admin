import { Controller, Get, Post, Param, Put, Delete, Body, UseInterceptors, UploadedFile, UsePipes, ValidationPipe } from '@nestjs/common';
import { PratoDto } from './dto/prato.dto';
import { PratoEntity } from './prato.entity';
import { PratoService } from './prato.service';
import { DeleteResult } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/users/upload.service';
import { Pipes } from 'aws-sdk';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/users/enum/user-type.enum';

@Controller()
export class PratoController {
    constructor(private readonly pratoService: PratoService, private readonly uploadService: UploadService) { }

    @Get('/pratos')
    async getPratos(): Promise<PratoEntity[]> {
        return this.pratoService.getPratosComCategorias();
    }

    @Roles(UserType.Admin)
    @Post('/criar/prato')
    @UseInterceptors(FileInterceptor('imagem'))
    async createPrato(@Body() pratoDto: PratoDto, @UploadedFile() file: Express.Multer.File): Promise<PratoEntity> {
        let filePath = ''
        if (file) {
            filePath = await this.uploadService.uploadFile(file);
        }
        return this.pratoService.createPrato(pratoDto, filePath);
    }

    @Get('/prato/:id')
    async getPrato(@Param('id') id: number): Promise<PratoEntity> {
        return this.pratoService.getPrato(id);
    }

    @Roles(UserType.Admin)
    @Put('/atualizar/prato/:id')
    @UseInterceptors(FileInterceptor('imagem'))
    async editPrato(
        @Param('id') id: number,
        @Body() pratoDto: PratoDto,
        @UploadedFile() file: Express.Multer.File
    ): Promise<PratoEntity> {
        let filePath = ''
        if (file) {
            filePath = await this.uploadService.uploadFile(file);
        }
        return this.pratoService.editPrato(id, pratoDto, filePath);
    }

    @Roles(UserType.Admin)
    @Delete('/deletar/prato/:id')
    async deletePrato(@Param('id') id: number): Promise<DeleteResult> {
        return this.pratoService.deletePrato(id);
    }

    @Get('/pratos-restaurante/:restauranteId')
    async getPratosPorRestaurante(@Param('restauranteId') restauranteId: number): Promise<PratoEntity[]> {
        return this.pratoService.getPratosPorRestaurante(restauranteId);
    }

    @Get('/pratos-por-categoria/')
    async getPratosCategoria() {
        return this.pratoService.getPratosPorCategoria();
    }

    @Get('/pratos-categoria/:id')
    async getPratosUCategoria(@Param('id') id: number) {
        return this.pratoService.getPratosUmaCategoria(id);
    }

    @Get('/qtd-categorias/:id')
    async getPratosCategoriaLimitado(@Param('id') id: number) {
        return this.pratoService.qtdCategorias(id);
    }

    @Get('/pagina-categoria/:categoriaID/:pagina')
    async getCategoriaPagina(@Param('categoriaID') categoriaID: number, @Param('pagina') pagina: number) {
        return this.pratoService.getCategoriasComPratoPagina(1, 1);
    }

    @Get('/pagina-cardapio/:restauranteId/:pagina')
    async getPratosPorPagina(@Param('restauranteId') restauranteId: number, @Param('pagina') pagina: number) {
        return this.pratoService.pratosPorPagina(restauranteId, pagina);
    }

    @Get('/prox-pagina/:restauranteId/:pagina')
    async countPratos(@Param('restauranteId') restauranteId: number, @Param('pagina') pagina: number) {
        return this.pratoService.verificaPaginacaoPratos(restauranteId, pagina);
    }
}
