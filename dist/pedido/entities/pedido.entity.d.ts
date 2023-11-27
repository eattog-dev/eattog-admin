import { CarrinhoCompraEntity } from "src/carrinho-compra/entities/carrinho-compra.entity";
import { StatusPedidoEntity } from "src/status-pedido/entities/status-pedido.entity";
import { UserEntity } from "src/users/entities/user.entity";
export declare class PedidoEntity {
    id: number;
    usuario_id: number;
    usuario: UserEntity;
    carrinho_compra_id: number;
    carrinho_compra: CarrinhoCompraEntity;
    status_id: number;
    status: StatusPedidoEntity;
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
}
