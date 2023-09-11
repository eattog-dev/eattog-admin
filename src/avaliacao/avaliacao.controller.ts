import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoEntity } from './avaliacao.entity';
import { AvaliacaoDto } from './dto/avaliacao.dto';

@Controller()
export class AvaliacaoController {
    constructor(private readonly avaliacaoService: AvaliacaoService) { }

    @Get('/avaliacoes')
    getAvaliacoes(): Promise<AvaliacaoEntity[]> {
        return this.avaliacaoService.getAvaliacoes();
    }

    @Post('criar/avaliacao')
    createAvaliacao(@Body() avaliacao: AvaliacaoDto): Promise<AvaliacaoEntity> {
        return this.avaliacaoService.createAvaliacoes(avaliacao);
    }

    @Get('avaliacao/:id')
    getAvaliacao(@Param('id') id: number): Promise<AvaliacaoEntity> {
        return this.avaliacaoService.getAvaliacao(id);
    }

    @Put('atualizar/avaliacao/:id')
    editAvaliacao(
        @Param('id') id: number,
        @Body() avaliacao: AvaliacaoDto
    ): Promise<AvaliacaoEntity> {
        return this.avaliacaoService.editAvaliacao(id, avaliacao);
    }

    @Delete('deletar/avaliacao/:id')
    deleteAvaliacao(@Param('id') id: number): Promise<DeleteResult> {
        return this.avaliacaoService.deleteAvaliacao(id);
    }

}
