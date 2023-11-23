"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnEnderecoDto = void 0;
class ReturnEnderecoDto {
    constructor(endereco) {
        this.cep = endereco.cep;
        this.estado = endereco.estado;
        this.municipio = endereco.municipio;
        this.logradouro = endereco.logradouro;
        this.numero_residencia = endereco.numero_residencia;
        this.bairro = endereco.bairro;
        this.complemento = endereco.complemento;
    }
}
exports.ReturnEnderecoDto = ReturnEnderecoDto;
//# sourceMappingURL=return_endereco.dto.js.map