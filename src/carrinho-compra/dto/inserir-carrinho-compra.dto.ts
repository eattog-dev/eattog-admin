import { IsNumber } from "class-validator";

export class InserirCarrinhoCompraDTO {
    @IsNumber()
    productId: number;

    @IsNumber()
    quantidade: number;
}