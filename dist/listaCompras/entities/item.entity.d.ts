import { PratoEntity } from 'src/pratos/prato.entity';
import { ListaEntity } from './lista.entity';
export declare class ItemEntity {
    id: number;
    quantidade: number;
    prato: PratoEntity;
    lista: ListaEntity;
    data_criacao: Date;
    data_alteracao: Date;
}
