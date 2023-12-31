import { PratoEntity } from 'src/pratos/entities/prato.entity';
export declare class CategoriaPratoEntity {
    slice(arg0: number, arg1: number): CategoriaPratoEntity;
    id: number;
    categoria: string;
    categoria_prato: PratoEntity[];
    data_criacao: Date;
    data_alteracao: Date;
    pratos: PratoEntity[];
}
