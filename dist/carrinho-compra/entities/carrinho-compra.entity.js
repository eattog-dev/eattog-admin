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
exports.CarrinhoCompraEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const carrinho_prato_entity_1 = require("../../carrinho-produto/entities/carrinho-prato.entity");
let CarrinhoCompraEntity = class CarrinhoCompraEntity {
};
exports.CarrinhoCompraEntity = CarrinhoCompraEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CarrinhoCompraEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CarrinhoCompraEntity.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CarrinhoCompraEntity.prototype, "data_criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CarrinhoCompraEntity.prototype, "data_alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CarrinhoCompraEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => carrinho_prato_entity_1.CarrinhoPratoEntity, carrinhoProduto => carrinhoProduto.carrinhoCompra),
    __metadata("design:type", Array)
], CarrinhoCompraEntity.prototype, "carrinhoProduto", void 0);
exports.CarrinhoCompraEntity = CarrinhoCompraEntity = __decorate([
    (0, typeorm_1.Entity)('carrinho-compra')
], CarrinhoCompraEntity);
//# sourceMappingURL=carrinho-compra.entity.js.map