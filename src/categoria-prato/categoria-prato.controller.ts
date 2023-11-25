import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriaPratoService } from './categoria-prato.service';
import { CategoriaPratoEntity } from './entities/categoria-prato.entity';
import { CategoriaPratoDto } from './dto/categoria-prato.dto';
import { DeleteResult } from 'typeorm';

@Controller()
export class CategoriaPratoController {
    constructor(private readonly categoriaPratoService: CategoriaPratoService) { }

    @Get('/categorias')
    async getCategorias(): Promise<CategoriaPratoEntity[]> {
        return this.categoriaPratoService.getCategorias();
    }

    @Post('/criar/categoria')
    async createCategoria(@Body() categoriaPratoDto: CategoriaPratoDto): Promise<CategoriaPratoEntity> {
        return this.categoriaPratoService.createCategoria(categoriaPratoDto);
    }

    @Get('/categoria-prato/:id')
    async getCategoria(@Param('id') id: number): Promise<CategoriaPratoEntity> {
        return this.categoriaPratoService.getCategoria(id);
    }

    @Put('/atualizar/categoria-prato/:id')
    async editCategoria(
        @Param('id') id: number,
        @Body() categoriaPratoDto: CategoriaPratoDto
    ): Promise<CategoriaPratoEntity> {
        return this.categoriaPratoService.editCategoria(id, categoriaPratoDto);
    }

    @Delete('/deletar/categoria-prato/:id')
    async deleteCategoria(@Param('id') id: number): Promise<DeleteResult> {
        return this.categoriaPratoService.deleteCategoria(id);
    }

}
