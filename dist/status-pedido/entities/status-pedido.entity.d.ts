import { PedidoEntity } from "src/pedido/entities/pedido.entity";
export declare class StatusPedidoEntity {
    id: number;
    status: string;
    pedido: PedidoEntity;
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
}
