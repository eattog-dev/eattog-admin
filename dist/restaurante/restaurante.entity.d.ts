import { PratoEntity } from 'src/pratos/prato.entity';
export declare class RestauranteEntity {
    id: number;
    imagem: string;
    logo: string;
    banner: string;
    razao_social: string;
    cnpj: string;
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    avaliacao: number;
    tipo_restaurante: string;
    tipo_retirada: string;
    distancia: string;
    descricao: string;
    pratos: PratoEntity[];
}
