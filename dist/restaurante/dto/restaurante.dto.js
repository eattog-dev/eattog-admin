"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestauranteDTO = void 0;
const class_validator_1 = require("class-validator");
class RestauranteDTO {
}
exports.RestauranteDTO = RestauranteDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "razao_social" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "razao_social", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "cnpj" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "cnpj", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "cep" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "cep", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "cep" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "numero_endereco", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "rua" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "rua", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "rua" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "bairro", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "cidade" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "cidade" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "numero_telefone" deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "numero_telefone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "tipoRestaurante" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "tipo_restaurante", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "tipoRetirada" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "tipo_retirada", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "distancia" deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "distancia", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "descricao" deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RestauranteDTO.prototype, "descricao", void 0);
//# sourceMappingURL=restaurante.dto.js.map