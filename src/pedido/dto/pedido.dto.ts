import { IsInt, IsNotEmpty } from "class-validator";

export class PedidoDTO {
    id: number;

    // @IsNotEmpty()
    // @IsInt()
    status_id: number;
}