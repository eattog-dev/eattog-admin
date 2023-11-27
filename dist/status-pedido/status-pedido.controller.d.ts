import { StatusPedidoService } from './status-pedido.service';
import { StatusPedidoDTO } from './dto/status-pedido.dto';
import { StatusPedidoEntity } from './entities/status-pedido.entity';
import { DeleteResult } from 'typeorm';
export declare class StatusPedidoController {
    private readonly statusPedidoService;
    constructor(statusPedidoService: StatusPedidoService);
    pegaStatusAtivos(): Promise<StatusPedidoEntity[]>;
    pegaStatusInativos(): Promise<StatusPedidoEntity[]>;
    criarStatus(statusPedido: StatusPedidoDTO): Promise<StatusPedidoEntity>;
    deletarStatusID(id: number): Promise<DeleteResult>;
}
