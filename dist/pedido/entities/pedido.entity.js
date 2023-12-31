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
exports.PedidoEntity = void 0;
const class_validator_1 = require("class-validator");
const carrinho_compra_entity_1 = require("../../carrinho-compra/entities/carrinho-compra.entity");
const status_pedido_entity_1 = require("../../status-pedido/entities/status-pedido.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let PedidoEntity = class PedidoEntity {
};
exports.PedidoEntity = PedidoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.pedido),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PedidoEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "carrinho_compra_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrinho_compra_entity_1.CarrinhoCompraEntity, (carrinho_compra) => carrinho_compra.pedido),
    (0, typeorm_1.JoinColumn)({ name: 'carrinho_compra_id', referencedColumnName: 'id' }),
    __metadata("design:type", carrinho_compra_entity_1.CarrinhoCompraEntity)
], PedidoEntity.prototype, "carrinho_compra", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "status_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_pedido_entity_1.StatusPedidoEntity, (status) => status.pedido),
    (0, typeorm_1.JoinColumn)({ name: 'status_id', referencedColumnName: 'id' }),
    __metadata("design:type", status_pedido_entity_1.StatusPedidoEntity)
], PedidoEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PedidoEntity.prototype, "data_criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PedidoEntity.prototype, "data_alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PedidoEntity.prototype, "isActive", void 0);
exports.PedidoEntity = PedidoEntity = __decorate([
    (0, typeorm_1.Entity)('pedido')
], PedidoEntity);
//# sourceMappingURL=pedido.entity.js.map