import { ReturnCarrinhoCompraDTO } from "src/carrinho-compra/dto/return-carrinho-compra.dto";
import { CarrinhoPratoEntity } from "../entities/carrinho-prato.entity";
import { ReturnPrato } from "src/pratos/dto/return-prato.dto";
export declare class ReturnCarrinhoPratoDTO {
    id: number;
    carrinho_compra_id: number;
    prato_id: number;
    quantidade: number;
    descricao: string;
    prato?: ReturnPrato;
    carrinhoCompra?: ReturnCarrinhoCompraDTO;
    constructor(carrinhoPrato: CarrinhoPratoEntity);
}
