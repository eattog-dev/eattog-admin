"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnCarrinhoPratoDTO = void 0;
const return_carrinho_compra_dto_1 = require("../../carrinho-compra/dto/return-carrinho-compra.dto");
const return_prato_dto_1 = require("../../pratos/dto/return-prato.dto");
class ReturnCarrinhoPratoDTO {
    constructor(carrinhoPrato) {
        this.id = carrinhoPrato.id;
        this.carrinho_compra_id = carrinhoPrato.carrinho_compra_id;
        this.prato_id = carrinhoPrato.prato_id;
        this.quantidade = carrinhoPrato.quantidade;
        this.descricao = carrinhoPrato.descricao;
        this.prato = carrinhoPrato.prato ? new return_prato_dto_1.ReturnPrato(carrinhoPrato.prato) : undefined;
        this.carrinhoCompra = carrinhoPrato.prato ? new return_carrinho_compra_dto_1.ReturnCarrinhoCompraDTO(carrinhoPrato.carrinhoCompra) : undefined;
    }
}
exports.ReturnCarrinhoPratoDTO = ReturnCarrinhoPratoDTO;
//# sourceMappingURL=return-carrinho-prato.dto.js.map