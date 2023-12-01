import { RestauranteEntity } from "../entities/restaurante.entity";

export class ReturnRestauranteDto {
    id: number;
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

 
    constructor(restaurante: RestauranteEntity) {
        this.id = restaurante.id;
        this.razao_social = restaurante.razao_social;
        this.imagem = restaurante.imagem;
        this.logo = restaurante.logo;
        this.banner = restaurante.banner;
        this.cnpj = restaurante.cnpj;
        this.cep = restaurante.cep;
        this.rua = restaurante.rua;
        this.bairro = restaurante.bairro;
        this.numero_endereco = restaurante.numero_endereco;
        this.numero_telefone = restaurante.numero_telefone;
        this.cidade = restaurante.cidade;
        this.estado = restaurante.estado;
    }
}
