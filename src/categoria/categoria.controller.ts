import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaDto } from './dto/categoria.dto';
import { DeleteResult } from 'typeorm';

@Controller()
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) { }

    @Get('/categorias')
    getCategorias(): Promise<CategoriaEntity[]> {
        return this.categoriaService.getCategorias();
    }

    @Post('criar/categoria')
    createCategoria(@Body() categoria: CategoriaDto): Promise<CategoriaEntity> {
        return this.categoriaService.createCategoria(categoria);
    }

    @Get('categoria/:id')
    getCategoria(@Param('id') id: number): Promise<CategoriaEntity> {
        return this.categoriaService.getCategoria(id);
    }

    @Put('atualizar/categoria/:id')
    editCategoria(
        @Param('id') id: number,
        @Body() categoria: CategoriaDto
    ): Promise<CategoriaEntity> {
        return this.categoriaService.editCategoria(id, categoria);
    }

    @Delete('deletar/categoria/:id')
    deleteCatedoria(@Param('id') id: number): Promise<DeleteResult> {
        return this.categoriaService.deleteCatedoria(id);
    }
}
