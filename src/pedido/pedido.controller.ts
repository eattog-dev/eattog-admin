import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { UserId } from 'src/decorators/user-id.decorator';
import { PedidoDTO } from './dto/pedido.dto';
import { PedidoEntity } from './entities/pedido.entity';

@Controller()
export class PedidoController {
    constructor(
        private readonly pedidoService: PedidoService
    ) {
    }

    @Post('/cria-pedido')
    @UsePipes(ValidationPipe)
    async criaPedido(@Body() pedidoDTO: PedidoDTO, @UserId() usuario: number): Promise<PedidoEntity> {
        pedidoDTO.status_id = 3;
        return this.pedidoService.criarPedido(pedidoDTO, usuario)
    }

}
