import { ItemEntity } from './item.entity';
export declare class ListaEntity {
    id: number;
    estado: string;
    items: ItemEntity[];
    data_criacao: Date;
    data_alteracao: Date;
}
