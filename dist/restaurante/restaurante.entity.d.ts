import { PratoEntity } from 'src/pratos/prato.entity';
export declare class RestauranteEntity {
    id: number;
    imagem: string;
    logo: string;
    banner: string;
    titulo: string;
    avaliacao: number;
    tipoRefeicao: string;
    distancia: string;
    tipoRetirada: string;
    descricao: string;
    pratos: PratoEntity[];
}
