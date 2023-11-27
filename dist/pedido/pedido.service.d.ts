import { PedidoEntity } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { StatusPedidoEntity } from 'src/status-pedido/entities/status-pedido.entity';
import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';
export declare class PedidoService {
    private readonly pedidoRepository;
    private readonly userRepository;
    private readonly statusRepository;
    private readonly carrinhoCompraRepository;
    constructor(pedidoRepository: Repository<PedidoEntity>, userRepository: Repository<UserEntity>, statusRepository: Repository<StatusPedidoEntity>, carrinhoCompraRepository: Repository<CarrinhoCompraEntity>);
}
