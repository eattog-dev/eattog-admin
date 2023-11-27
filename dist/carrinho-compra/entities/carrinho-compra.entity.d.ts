import { CarrinhoPratoEntity } from 'src/carrinho-produto/entities/carrinho-prato.entity';
import { PedidoEntity } from 'src/pedido/entities/pedido.entity';
export declare class CarrinhoCompraEntity {
    id: number;
    usuario_id: number;
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
    carrinhoProduto: CarrinhoPratoEntity[];
    pedido: PedidoEntity;
}
