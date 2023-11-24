import { EnderecoEntity } from "../endereco.entity";

export class ReturnEnderecoDto {
    cep: string;
    estado: string;
    municipio: string;
    logradouro: string;
    numero_residencia: string;
    bairro: string;
    complemento: string;

    constructor(endereco: EnderecoEntity) {
        this.cep = endereco.cep;
        this.estado = endereco.estado;
        this.municipio = endereco.municipio;
        this.logradouro = endereco.logradouro;
        this.numero_residencia = endereco.numero_residencia;
        this.bairro = endereco.bairro;
        this.complemento = endereco.complemento;
    }
}
