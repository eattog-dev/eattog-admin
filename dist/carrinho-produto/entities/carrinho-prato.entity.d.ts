import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';
import { PratoEntity } from 'src/pratos/entities/prato.entity';
export declare class CarrinhoPratoEntity {
    id: number;
    carrinho_compra_id: number;
    prato_id: number;
    quantidade: number;
    descricao: string;
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
    carrinhoCompra: CarrinhoCompraEntity;
    prato: PratoEntity;
}
