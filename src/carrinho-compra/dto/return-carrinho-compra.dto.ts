import { CarrinhoCompraEntity } from "../entities/carrinho-compra.entity";
import { ReturnCarrinhoPratoDTO } from "src/carrinho-produto/dtos/return-carrinho-prato.dto";

export class ReturnCarrinhoCompraDTO {
    id: number;
    carrinhoProduto: ReturnCarrinhoPratoDTO[];

    constructor(carrinho: CarrinhoCompraEntity) {
        this.id = carrinho.id,
            this.carrinhoProduto = carrinho.carrinhoProduto
                ? carrinho.carrinhoProduto.map(
                    (cartProduct) => new ReturnCarrinhoPratoDTO(cartProduct),
                )
                : undefined;
    }
}