import { Controller, Param, Post } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { UserId } from 'src/decorators/user-id.decorator';
import { PedidoDTO } from './dto/pedido.dto';

@Controller()
export class PedidoController {
    constructor(
        private readonly pedidoService: PedidoService
    ) {
    }

    // @Post('/:statusId/:carrinhoId/criar-pedido')
    // async criarPedido(pedidoDto: PedidoDTO) {
    //     return this.pedidoService.criaPedido(pedidoDto)
    // }
}
