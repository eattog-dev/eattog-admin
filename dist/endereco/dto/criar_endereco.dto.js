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
exports.CriarEnderecoDto = void 0;
const class_validator_1 = require("class-validator");
class CriarEnderecoDto {
}
exports.CriarEnderecoDto = CriarEnderecoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "cep" deve ser uma string' }),
    __metadata("design:type", String)
], CriarEnderecoDto.prototype, "cep", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "estado" deve ser uma string' }),
    __metadata("design:type", String)
], CriarEnderecoDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "municipio" deve ser uma string' }),
    __metadata("design:type", String)
], CriarEnderecoDto.prototype, "municipio", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "logradouro" deve ser uma string' }),
    __metadata("design:type", String)
], CriarEnderecoDto.prototype, "logradouro", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "numero_residencia" deve ser uma string' }),
    __metadata("design:type", String)
], CriarEnderecoDto.prototype, "numero_residencia", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "bairro" deve ser uma string' }),
    __metadata("design:type", String)
], CriarEnderecoDto.prototype, "bairro", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "complemento" deve ser uma string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CriarEnderecoDto.prototype, "complemento", void 0);
//# sourceMappingURL=criar_endereco.dto.js.map