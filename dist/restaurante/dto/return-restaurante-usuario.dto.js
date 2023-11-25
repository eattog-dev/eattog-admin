"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRestauranteUsuarioDTO = void 0;
class ReturnRestauranteUsuarioDTO {
    constructor(restauranteEntity) {
        this.razao_social = restauranteEntity.razao_social;
        this.cnpj = restauranteEntity.cnpj;
        this.cep = restauranteEntity.cep;
        this.rua_bairro = restauranteEntity.rua_bairro;
        this.cidade = restauranteEntity.cidade;
    }
}
exports.ReturnRestauranteUsuarioDTO = ReturnRestauranteUsuarioDTO;
//# sourceMappingURL=return-restaurante-usuario.dto.js.map