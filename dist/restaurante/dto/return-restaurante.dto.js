"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRestauranteDto = void 0;
class ReturnRestauranteDto {
    constructor(restaurante) {
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
exports.ReturnRestauranteDto = ReturnRestauranteDto;
//# sourceMappingURL=return-restaurante.dto.js.map