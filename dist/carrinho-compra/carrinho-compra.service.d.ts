import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { Repository } from 'typeorm';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';
export declare class CarrinhoCompraService {
    private readonly carrinhoRepository;
    constructor(carrinhoRepository: Repository<CarrinhoCompraEntity>);
    verificaCarrinhoAtivo(usuario_id: number): Promise<void>;
    createCart(usuario_id: number): Promise<CarrinhoCompraEntity>;
    inserirProdutoNoCarrinho(inserirCarrinhoDTO: InserirCarrinhoCompraDTO, usuario_id: number): Promise<CarrinhoCompraEntity>;
}
