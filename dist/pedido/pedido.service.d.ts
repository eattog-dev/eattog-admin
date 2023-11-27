import { PedidoEntity } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { StatusPedidoEntity } from 'src/status-pedido/entities/status-pedido.entity';
import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';
import { CarrinhoCompraService } from 'src/carrinho-compra/carrinho-compra.service';
import { PedidoDTO } from './dto/pedido.dto';
import { StatusPedidoService } from 'src/status-pedido/status-pedido.service';
import { UserService } from 'src/users/user.service';
export declare class PedidoService {
    private readonly pedidoRepository;
    private readonly userRepository;
    private readonly statusRepository;
    private readonly statusService;
    private readonly carrinhoCompraRepository;
    private readonly carrinhoService;
    private readonly usuarioService;
    constructor(pedidoRepository: Repository<PedidoEntity>, userRepository: Repository<UserEntity>, statusRepository: Repository<StatusPedidoEntity>, statusService: StatusPedidoService, carrinhoCompraRepository: Repository<CarrinhoCompraEntity>, carrinhoService: CarrinhoCompraService, usuarioService: UserService);
    criarPedido(pedidoDTO: PedidoDTO, usuarioId: number): Promise<PedidoEntity>;
}
