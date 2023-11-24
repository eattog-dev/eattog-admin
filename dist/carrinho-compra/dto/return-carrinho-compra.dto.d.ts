import { CarrinhoCompraEntity } from "../entities/carrinho-compra.entity";
import { ReturnCarrinhoPratoDTO } from "src/carrinho-produto/dtos/return-carrinho-prato.dto";
export declare class ReturnCarrinhoCompraDTO {
    id: number;
    carrinhoProduto: ReturnCarrinhoPratoDTO[];
    constructor(carrinho: CarrinhoCompraEntity);
}
