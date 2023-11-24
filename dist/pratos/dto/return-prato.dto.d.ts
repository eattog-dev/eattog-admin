import { PratoEntity } from '../prato.entity';
export declare class ReturnPrato {
    id: number;
    nome: string;
    valor: number;
    imagem: string;
    ingredientes: string[];
    tempo_preparo: number;
    descricao: string;
    constructor(pratoEntity: PratoEntity);
}
