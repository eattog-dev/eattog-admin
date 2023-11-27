import { IsString } from "class-validator";

export class StatusPedidoDTO {
    @IsString({message: 'O campo status não pode ser nulo'})
    status: string
}