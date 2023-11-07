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
exports.PratoDto = void 0;
const class_validator_1 = require("class-validator");
class PratoDto {
}
exports.PratoDto = PratoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "nome" deve ser uma string' }),
    __metadata("design:type", String)
], PratoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'O campo "valor" deve ser um número' }),
    __metadata("design:type", Number)
], PratoDto.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "imagem" deve ser uma string' }),
    __metadata("design:type", String)
], PratoDto.prototype, "imagem", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'O campo "ingredientes" deve ser uma matriz de strings' }),
    __metadata("design:type", Array)
], PratoDto.prototype, "ingredientes", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PratoDto.prototype, "tempo_preparo", void 0);
__decorate([
<<<<<<< HEAD
    (0, class_validator_1.IsString)(),
=======
    (0, class_validator_1.IsString)({ message: 'O campo "descricao" deve ser uma string' }),
>>>>>>> role
    __metadata("design:type", String)
], PratoDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'O campo "restaurante" deve ser um número inteiro' }),
    __metadata("design:type", Number)
], PratoDto.prototype, "restaurante", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'O campo "categoria_prato" deve ser um número inteiro' }),
    __metadata("design:type", Number)
], PratoDto.prototype, "categoria_prato", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: 'O campo "desconto" deve ser um valor booleano' }),
    __metadata("design:type", Boolean)
], PratoDto.prototype, "desconto", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PratoDto.prototype, "valor_desconto", void 0);
//# sourceMappingURL=prato.dto.js.map