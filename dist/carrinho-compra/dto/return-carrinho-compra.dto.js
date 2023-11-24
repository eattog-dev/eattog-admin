"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnCarrinhoCompraDTO = void 0;
const return_carrinho_prato_dto_1 = require("../../carrinho-produto/dtos/return-carrinho-prato.dto");
class ReturnCarrinhoCompraDTO {
    constructor(carrinho) {
        this.id = carrinho.id,
            this.carrinhoProduto = carrinho.carrinhoProduto
                ? carrinho.carrinhoProduto.map((cartProduct) => new return_carrinho_prato_dto_1.ReturnCarrinhoPratoDTO(cartProduct))
                : undefined;
    }
}
exports.ReturnCarrinhoCompraDTO = ReturnCarrinhoCompraDTO;
//# sourceMappingURL=return-carrinho-compra.dto.js.map