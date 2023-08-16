import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { PratoDto } from './dto/prato.dto';
import { PratoEntity } from './prato.entity';
import { PratoService } from './prato.service';
import { DeleteResult } from 'typeorm';

@Controller('pratos')
export class PratoController {
    constructor(private readonly pratoService: PratoService) { }

    @Get('')
    getPratos(): Promise<PratoEntity[]> {
        return this.pratoService.getPratos();
    }

    @Post('')
    createPrato(@Body() prato: PratoEntity): Promise<PratoEntity> {
        return this.pratoService.createPrato(prato);
    }

    @Get(':id')
    getPrato(@Param('id') id: number): Promise<PratoEntity> {
        return this.pratoService.getPrato(id);
    }

    @Put(':id')
    editPrato(
        @Param('id') id: number,
        @Body() prato: PratoDto
    ): Promise<PratoEntity> {
        return this.pratoService.editPrato(id, prato);
    }

    @Delete(':id')
    deletePrato(@Param('id') id: number): Promise<DeleteResult> {
        return this.pratoService.deletePrato(id);
    }

}
