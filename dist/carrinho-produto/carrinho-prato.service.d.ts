import { CarrinhoPratoEntity } from './entities/carrinho-prato.entity';
import { Repository } from 'typeorm';
import { InserirCarrinhoCompraDTO } from 'src/carrinho-compra/dto/inserir-carrinho-compra.dto';
import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';
import { PratoService } from 'src/pratos/prato.service';
export declare class CarrinhoPratoService {
    private readonly carrinhoPratoRepository;
    private readonly pratoService;
    constructor(carrinhoPratoRepository: Repository<CarrinhoPratoEntity>, pratoService: PratoService);
    verificaProdutoCarrinho(prato_id: number, carrinho_compra_id: number): Promise<CarrinhoPratoEntity>;
    criaProdutoCarrinho(inserirCarrinhoCompraDTO: InserirCarrinhoCompraDTO, carrinho_compra_id: number): Promise<CarrinhoPratoEntity>;
    inserirProdutoCarrinho(inserirCarrinhoCompraDTO: InserirCarrinhoCompraDTO, carrinhoCompra: CarrinhoCompraEntity): Promise<CarrinhoPratoEntity>;
}
