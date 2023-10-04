import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { PratoDto } from './dto/prato.dto';
import { PratoEntity } from './prato.entity';
import { PratoService } from './prato.service';
import { DeleteResult } from 'typeorm';

@Controller()
export class PratoController {
    constructor(private readonly pratoService: PratoService) { }

    @Get('pratos')
    async getPratos(): Promise<PratoEntity[]> {
        return this.pratoService.getPratosComCategorias();
    }

    @Post('criar/prato')
    async createPrato(@Body() pratoDto: PratoDto): Promise<PratoEntity> {
        return this.pratoService.createPrato(pratoDto);
    }

    @Get('prato/:id')
    async getPrato(@Param('id') id: number): Promise<PratoEntity> {
        return this.pratoService.getPrato(id);
    }

    @Put('atualizar/prato/:id')
    async editPrato(
        @Param('id') id: number,
        @Body() pratoDto: PratoDto
    ): Promise<PratoEntity> {
        return this.pratoService.editPrato(id, pratoDto);
    }

    @Delete('deletar/prato/:id')
    async deletePrato(@Param('id') id: number): Promise<DeleteResult> {
        return this.pratoService.deletePrato(id);
    }

    @Get('pratos-restaurante/:restauranteId')
    async getPratosPorRestaurante(@Param('restauranteId') restauranteId: number): Promise<PratoEntity[]> {
        return this.pratoService.getPratosPorRestaurante(restauranteId);
    }

    @Get('pratos-por-categoria/')
    async getPratosCategoria() {
        return this.pratoService.getPratosPorCategoria();
    }

}
