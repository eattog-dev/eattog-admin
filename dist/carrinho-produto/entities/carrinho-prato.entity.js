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
exports.CarrinhoPratoEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const carrinho_compra_entity_1 = require("../../carrinho-compra/entities/carrinho-compra.entity");
const prato_entity_1 = require("../../pratos/prato.entity");
let CarrinhoPratoEntity = class CarrinhoPratoEntity {
};
exports.CarrinhoPratoEntity = CarrinhoPratoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CarrinhoPratoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CarrinhoPratoEntity.prototype, "carrinho_compra_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CarrinhoPratoEntity.prototype, "prato_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CarrinhoPratoEntity.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CarrinhoPratoEntity.prototype, "data_criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CarrinhoPratoEntity.prototype, "data_alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CarrinhoPratoEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrinho_compra_entity_1.CarrinhoCompraEntity, carrinhoCompra => carrinhoCompra.carrinhoProduto),
    (0, typeorm_1.JoinColumn)({ name: 'carrinho_compra_id', referencedColumnName: 'id' }),
    __metadata("design:type", carrinho_compra_entity_1.CarrinhoCompraEntity)
], CarrinhoPratoEntity.prototype, "carrinhoCompra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => prato_entity_1.PratoEntity, prato => prato.carrinhoPrato),
    (0, typeorm_1.JoinColumn)({ name: 'prato_id', referencedColumnName: 'id' }),
    __metadata("design:type", prato_entity_1.PratoEntity)
], CarrinhoPratoEntity.prototype, "prato", void 0);
exports.CarrinhoPratoEntity = CarrinhoPratoEntity = __decorate([
    (0, typeorm_1.Entity)('carrinho-prato')
], CarrinhoPratoEntity);
//# sourceMappingURL=carrinho-prato.entity.js.map