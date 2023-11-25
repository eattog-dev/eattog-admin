import { RestauranteEntity } from "../entities/restaurante.entity";
export declare class ReturnRestauranteDto {
    razao_social: string;
    imagem: string;
    logo: string;
    banner: string;
    cnpj: string;
    cep: string;
    rua: string;
    bairro: string;
    numero_endereco: string;
    numero_telefone: string;
    cidade: string;
    estado: string;
    constructor(restaurante: RestauranteEntity);
}
