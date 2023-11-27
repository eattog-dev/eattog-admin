import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { StatusPedidoService } from './status-pedido.service';
import { StatusPedidoDTO } from './dto/status-pedido.dto';
import { StatusPedidoEntity } from './entities/status-pedido.entity';
import { DeleteResult } from 'typeorm';

@Controller()
export class StatusPedidoController {
    constructor(
        private readonly statusPedidoService: StatusPedidoService
    ) {
    }

    @Get('/status')
    async pegaStatusAtivos(): Promise<StatusPedidoEntity[]> {
        return await this.statusPedidoService.todosStatusAtivos()
    }

    @Get('/status-inativos')
    async pegaStatusInativos(): Promise<StatusPedidoEntity[]> {
        return await this.statusPedidoService.todosStatusInativos()
    }

    @Post('/status')
    @UsePipes(ValidationPipe)
    async criarStatus(@Body() statusPedido: StatusPedidoDTO) {
        return this.statusPedidoService.createStatusPedido(statusPedido)
    }

    @Delete('/deletar-status/:id')
    async deletarStatusID(@Param('id') id: number): Promise<DeleteResult> {
        return this.statusPedidoService.deletarStatusId(id);
    }

}
