import { EnderecoEntity } from "../endereco.entity";
export declare class ReturnEnderecoDto {
    cep: string;
    estado: string;
    municipio: string;
    logradouro: string;
    numero_residencia: string;
    bairro: string;
    complemento: string;
    constructor(endereco: EnderecoEntity);
}
