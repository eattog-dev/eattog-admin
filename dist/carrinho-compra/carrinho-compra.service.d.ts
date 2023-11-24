import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';
import { CarrinhoPratoService } from 'src/carrinho-produto/carrinho-prato.service';
export declare class CarrinhoCompraService {
    private readonly carrinhoCompraRepository;
    private readonly carrinhoPratoService;
    constructor(carrinhoCompraRepository: Repository<CarrinhoCompraEntity>, carrinhoPratoService: CarrinhoPratoService);
    limpaCarrinho(userId: number): Promise<DeleteResult>;
    findCarrinhoUsuarioId(usuario_id: number, isRelations?: boolean): Promise<CarrinhoCompraEntity>;
    createCart(usuario_id: number): Promise<CarrinhoCompraEntity>;
    inserirProdutoNoCarrinho(inserirCarrinhoDTO: InserirCarrinhoCompraDTO, usuario_id: number): Promise<CarrinhoCompraEntity>;
}
