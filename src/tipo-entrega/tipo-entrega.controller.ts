import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TipoEntregaService } from './tipo-entrega.service';
import { TipoEntregaEntity } from './tipoEntrega.entity';
import { DeleteResult } from 'typeorm';
import { TipoEntregaDto } from './dto/tipo-entrega.dto';

@Controller()
export class TipoEntregaController {
    constructor(private readonly tipoEntregaService: TipoEntregaService) { }

    @Get('/tipo-entregas')
    getTipoEntregas(): Promise<TipoEntregaEntity[]> {
        return this.tipoEntregaService.getTipoEntregas();
    }

    @Post('criar/tipo-entrega')
    createTipoEntrega(@Body() tipo: TipoEntregaDto): Promise<TipoEntregaEntity> {
        return this.tipoEntregaService.createTipoEntrega(tipo);
    }

    @Get('tipo-entrega/:id')
    getTipoEntrega(@Param('id') id: number): Promise<TipoEntregaEntity> {
        return this.tipoEntregaService.getTipoEntrega(id);
    }

    @Put('atualizar/tipo-entrega/:id')
    editTipoEntrega(
        @Param('id') id: number,
        @Body() tipo: TipoEntregaDto
    ): Promise<TipoEntregaEntity> {
        return this.tipoEntregaService.editTipoEntrega(id, tipo);
    }

    @Delete('deletar/tipo-entrega/:id')
    deleteTipoEntrega(@Param('id') id: number): Promise<DeleteResult> {
        return this.tipoEntregaService.deleteTipoEntrega(id);
    }
}
