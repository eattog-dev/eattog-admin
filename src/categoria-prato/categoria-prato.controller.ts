import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriaPratoService } from './categoria-prato.service';
import { CategoriaPratoEntity } from './entities/categoria-prato.entity';
import { CategoriaPratoDto } from './dto/categoria-prato.dto';
import { DeleteResult } from 'typeorm';
import { UserType } from 'src/users/enum/user-type.enum';
import { Roles } from 'src/decorators/roles.decorator';

@Controller()
export class CategoriaPratoController {
    constructor(private readonly categoriaPratoService: CategoriaPratoService) { }

    @Get('/categorias')
    async getCategorias(): Promise<CategoriaPratoEntity[]> {
        return this.categoriaPratoService.getCategorias();
    }

    @Roles(UserType.Admin)
    @Post('/criar/categoria')
    async createCategoria(@Body() categoriaPratoDto: CategoriaPratoDto): Promise<CategoriaPratoEntity> {
        return this.categoriaPratoService.createCategoria(categoriaPratoDto);
    }

    @Get('/categoria-prato/:id')
    async getCategoria(@Param('id') id: number): Promise<CategoriaPratoEntity> {
        return this.categoriaPratoService.getCategoria(id);
    }

    @Roles(UserType.Admin)
    @Put('/atualizar/categoria-prato/:id')
    async editCategoria(
        @Param('id') id: number,
        @Body() categoriaPratoDto: CategoriaPratoDto
    ): Promise<CategoriaPratoEntity> {
        return this.categoriaPratoService.editCategoria(id, categoriaPratoDto);
    }

    @Roles(UserType.Admin)
    @Delete('/deletar/categoria-prato/:id')
    async deleteCategoria(@Param('id') id: number): Promise<DeleteResult> {
        return this.categoriaPratoService.deleteCategoria(id);
    }

}
