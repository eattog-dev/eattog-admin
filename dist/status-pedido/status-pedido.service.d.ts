import { StatusPedidoEntity } from './entities/status-pedido.entity';
import { DeleteResult, Repository } from 'typeorm';
import { StatusPedidoDTO } from './dto/status-pedido.dto';
export declare class StatusPedidoService {
    private statusPedidoRepository;
    constructor(statusPedidoRepository: Repository<StatusPedidoEntity>);
    todosStatusAtivos(): Promise<StatusPedidoEntity[]>;
    todosStatusInativos(): Promise<StatusPedidoEntity[]>;
    createStatusPedido(statusPedidoDTO: StatusPedidoDTO): Promise<StatusPedidoEntity>;
    deletarStatusId(id: number): Promise<DeleteResult>;
}
