import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';
import { PratoEntity } from 'src/pratos/entities/prato.entity';
export declare class StripeService {
    private stripe;
    constructor();
    criarProduto(prato: PratoEntity): Promise<any>;
    criarSessaoCompra(carrinhoCompra: CarrinhoCompraEntity): Promise<any>;
}
