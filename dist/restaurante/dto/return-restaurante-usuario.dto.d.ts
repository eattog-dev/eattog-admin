import { RestauranteEntity } from "../restaurante.entity";
export declare class ReturnRestauranteUsuarioDTO {
    razao_social: string;
    cnpj: string;
    cep: string;
    rua_bairro: string;
    cidade: string;
    constructor(restauranteEntity: RestauranteEntity);
}
