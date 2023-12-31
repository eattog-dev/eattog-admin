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
exports.PratoEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const restaurante_entity_1 = require("../../restaurante/entities/restaurante.entity");
const categoria_prato_entity_1 = require("../../categoria-prato/entities/categoria-prato.entity");
const carrinho_prato_entity_1 = require("../../carrinho-produto/entities/carrinho-prato.entity");
let PratoEntity = class PratoEntity {
};
exports.PratoEntity = PratoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PratoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome do prato não pode ser nulo.' }),
    __metadata("design:type", String)
], PratoEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O valor do prato não pode ser nulo.' }),
    __metadata("design:type", Number)
], PratoEntity.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PratoEntity.prototype, "valorStripe", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'A imagem não pode ser nula' }),
    __metadata("design:type", String)
], PratoEntity.prototype, "imagem", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PratoEntity.prototype, "desconto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PratoEntity.prototype, "valor_desconto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => restaurante_entity_1.RestauranteEntity, restaurante => restaurante.pratos),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O restaurante não pode ser nulo.' }),
    __metadata("design:type", restaurante_entity_1.RestauranteEntity)
], PratoEntity.prototype, "restaurante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_prato_entity_1.CategoriaPratoEntity, (categoria_prato) => categoria_prato.categoria_prato),
    (0, typeorm_1.JoinColumn)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'A categoria_prato não pode ser nula.' }),
    __metadata("design:type", categoria_prato_entity_1.CategoriaPratoEntity)
], PratoEntity.prototype, "prato_categoria", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O prato não pode ter ingredientes nulos.' }),
    __metadata("design:type", Array)
], PratoEntity.prototype, "ingredientes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O tempo de preparo não pode ser nulo.' }),
    __metadata("design:type", Number)
], PratoEntity.prototype, "tempo_preparo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'A descrição do prato não pode ser nula' }),
    __metadata("design:type", String)
], PratoEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PratoEntity.prototype, "data_criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PratoEntity.prototype, "data_alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PratoEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => carrinho_prato_entity_1.CarrinhoPratoEntity, carrinhoProduto => carrinhoProduto.prato),
    __metadata("design:type", Array)
], PratoEntity.prototype, "carrinhoPrato", void 0);
exports.PratoEntity = PratoEntity = __decorate([
    (0, typeorm_1.Entity)('pratos')
], PratoEntity);
//# sourceMappingURL=prato.entity.js.map