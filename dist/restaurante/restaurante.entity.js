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
exports.RestauranteEntity = void 0;
const typeorm_1 = require("typeorm");
const prato_entity_1 = require("../pratos/prato.entity");
const class_validator_1 = require("class-validator");
let RestauranteEntity = class RestauranteEntity {
};
exports.RestauranteEntity = RestauranteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RestauranteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A imagem não pode estar vazia' }),
    (0, class_validator_1.IsString)({ message: 'A imagem deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "imagem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo logo não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O campo logo deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo banner não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O campo banner deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "banner", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O título não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O título deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A avaliação não pode estar vazia' }),
    (0, class_validator_1.IsNumber)({}, { message: 'A avaliação deve ser um número' }),
    __metadata("design:type", Number)
], RestauranteEntity.prototype, "avaliacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O tipo de refeição não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O tipo de refeição deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "tipoRefeicao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A distância não pode estar vazia' }),
    (0, class_validator_1.IsString)({ message: 'A distância deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "distancia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A localização não pode estar vazia' }),
    (0, class_validator_1.IsString)({ message: 'A localização deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "localizacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O tipo de retirada não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O tipo de retirada deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "tipoRetirada", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A descrição não pode estar vazia' }),
    (0, class_validator_1.IsString)({ message: 'A descrição deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prato_entity_1.PratoEntity, (prato) => prato.restaurante),
    __metadata("design:type", Array)
], RestauranteEntity.prototype, "pratos", void 0);
exports.RestauranteEntity = RestauranteEntity = __decorate([
    (0, typeorm_1.Entity)('restaurantes')
], RestauranteEntity);
//# sourceMappingURL=restaurante.entity.js.map