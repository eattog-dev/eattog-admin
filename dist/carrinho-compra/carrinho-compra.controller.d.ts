import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';
import { CarrinhoCompraService } from './carrinho-compra.service';
export declare class CarrinhoCompraController {
    private readonly carrinhoCompraService;
    constructor(carrinhoCompraService: CarrinhoCompraService);
    inserirCarrinho(criarCarrinhoCompra: InserirCarrinhoCompraDTO, usuarioId: number): Promise<CarrinhoCompraEntity>;
}
