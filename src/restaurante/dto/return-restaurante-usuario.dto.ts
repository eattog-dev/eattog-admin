import { RestauranteEntity } from "../restaurante.entity";

export class ReturnRestauranteUsuarioDTO {
    razao_social: string;
    cnpj: string;
    cep: string;
    rua_bairro: string;
    cidade: string;

    constructor(restauranteEntity: RestauranteEntity) {
        this.razao_social = restauranteEntity.razao_social;
        this.cnpj = restauranteEntity.cnpj;
        this.cep = restauranteEntity.cep;
        this.rua_bairro = restauranteEntity.rua_bairro;
        this.cidade = restauranteEntity.cidade;
    }
}