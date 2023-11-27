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
exports.StatusPedidoEntity = void 0;
const class_validator_1 = require("class-validator");
const pedido_entity_1 = require("../../pedido/entities/pedido.entity");
const typeorm_1 = require("typeorm");
let StatusPedidoEntity = class StatusPedidoEntity {
};
exports.StatusPedidoEntity = StatusPedidoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StatusPedidoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StatusPedidoEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pedido_entity_1.PedidoEntity, (pedido) => pedido.status),
    __metadata("design:type", pedido_entity_1.PedidoEntity)
], StatusPedidoEntity.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StatusPedidoEntity.prototype, "data_criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StatusPedidoEntity.prototype, "data_alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], StatusPedidoEntity.prototype, "isActive", void 0);
exports.StatusPedidoEntity = StatusPedidoEntity = __decorate([
    (0, typeorm_1.Entity)('status-pedido')
], StatusPedidoEntity);
//# sourceMappingURL=status-pedido.entity.js.map