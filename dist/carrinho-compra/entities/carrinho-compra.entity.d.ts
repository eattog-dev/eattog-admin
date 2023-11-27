import { CarrinhoPratoEntity } from 'src/carrinho-produto/entities/carrinho-prato.entity';
export declare class CarrinhoCompraEntity {
    id: number;
    usuario_id: number;
    status: string;
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
    carrinhoProduto: CarrinhoPratoEntity[];
}
