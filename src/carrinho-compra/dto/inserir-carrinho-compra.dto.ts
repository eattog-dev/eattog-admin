import { IsNumber, IsString } from "class-validator";

export class InserirCarrinhoCompraDTO {
    @IsNumber()
    productId: number;

    @IsNumber()
    quantidade: number;

    @IsString()
    descricao: string;
}