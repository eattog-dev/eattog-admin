import { Controller, Get, Put, Post, Body, Param } from '@nestjs/common';
import { ListaService } from './lista.service';
import { ListaEntity } from './entities/lista.entity';
import { ListaDto } from './dtos/lista.dto';
import { ItemDto } from './dtos/item.dto';

@Controller()
export class ListaController {
    constructor(
        private readonly listaService: ListaService,
    ) { }

    @Get()
    listar(): Promise<ListaEntity[]> {
        return this.listaService.listar();
    }

    @Post()
    criar(@Body() listaDto: ListaDto): Promise<ListaEntity> {
        return this.listaService.criar(listaDto);
    }

    @Put(":id/completar")
    completar(@Param('id') id: number): Promise<ListaEntity> {
        return this.listaService.completar(id);
    }

    // @Get(":id/checkout")
    // async checkout(@Param('id') id: number) {
    //     const lista = await this.listaService.detalhes(id);
    //     return this.stripeService.criarSessaoCompra(lista);
    // }

    @Put(":id/adicionar")
    adicionar(
        @Param('id') id: number,
        @Body() itemDto: ItemDto
    ): Promise<ListaEntity> {
        return this.listaService.adicionarItem(id, itemDto);
    }
}
