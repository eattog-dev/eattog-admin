"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnPrato = void 0;
class ReturnPrato {
    constructor(pratoEntity) {
        this.id = pratoEntity.id;
        this.nome = pratoEntity.nome;
        this.valor = pratoEntity.valor;
        this.imagem = pratoEntity.imagem;
        this.ingredientes = pratoEntity.ingredientes;
        this.tempo_preparo = pratoEntity.tempo_preparo;
        this.descricao = pratoEntity.descricao;
    }
}
exports.ReturnPrato = ReturnPrato;
//# sourceMappingURL=return-prato.dto.js.map