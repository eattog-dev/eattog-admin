
import { PratoEntity } from '../entities/prato.entity';

export class ReturnPrato {
    id: number;
    nome: string;
    valor: number;
    imagem: string;
    ingredientes: string[];
    tempo_preparo: number;
    descricao: string;

    constructor(pratoEntity: PratoEntity) {
        this.id = pratoEntity.id;
        this.nome = pratoEntity.nome;
        this.valor = pratoEntity.valor;
        this.imagem = pratoEntity.imagem;
        this.ingredientes = pratoEntity.ingredientes;
        this.tempo_preparo = pratoEntity.tempo_preparo;
        this.descricao = pratoEntity.descricao;
    }
}
