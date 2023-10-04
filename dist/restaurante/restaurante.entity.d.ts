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
    localizacao: string;
    tipoRetirada: string;
    descricao: string;
    pratos: PratoEntity[];
}
