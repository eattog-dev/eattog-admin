import { ReturnCarrinhoCompraDTO } from "src/carrinho-compra/dto/return-carrinho-compra.dto";
import { CarrinhoPratoEntity } from "../entities/carrinho-prato.entity";
import { ReturnPrato } from "src/pratos/dto/return-prato.dto";

export class ReturnCarrinhoPratoDTO {
    id: number;
    carrinho_compra_id: number;
    prato_id: number;
    quantidade: number;
    descricao: string;
    prato?: ReturnPrato;
    carrinhoCompra?: ReturnCarrinhoCompraDTO;

    constructor(carrinhoPrato: CarrinhoPratoEntity) {
        this.id = carrinhoPrato.id;
        this.carrinho_compra_id = carrinhoPrato.carrinho_compra_id;
        this.prato_id = carrinhoPrato.prato_id;
        this.quantidade = carrinhoPrato.quantidade;
        this.descricao = carrinhoPrato.descricao;
        this.prato = carrinhoPrato.prato ? new ReturnPrato(carrinhoPrato.prato) : undefined;
        this.carrinhoCompra = carrinhoPrato.prato ? new ReturnCarrinhoCompraDTO(carrinhoPrato.carrinhoCompra) : undefined;
    }
}