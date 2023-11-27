import { PedidoService } from './pedido.service';
import { PedidoDTO } from './dto/pedido.dto';
import { PedidoEntity } from './entities/pedido.entity';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    criaPedido(pedidoDTO: PedidoDTO, usuario: number): Promise<PedidoEntity>;
}
