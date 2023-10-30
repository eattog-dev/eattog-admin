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
exports.ItemEntity = void 0;
const typeorm_1 = require("typeorm");
const prato_entity_1 = require("../../pratos/prato.entity");
const lista_entity_1 = require("./lista.entity");
const class_validator_1 = require("class-validator");
let ItemEntity = class ItemEntity {
};
exports.ItemEntity = ItemEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ItemEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'A quantidade do item não pode estar vazia' }),
    (0, class_validator_1.IsNumber)({}, { message: 'A quantidade do item deve ser um número' }),
    __metadata("design:type", Number)
], ItemEntity.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => prato_entity_1.PratoEntity, (prato) => prato.items, {
        eager: true,
    }),
    __metadata("design:type", prato_entity_1.PratoEntity)
], ItemEntity.prototype, "prato", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lista_entity_1.ListaEntity, (lista) => lista.items),
    __metadata("design:type", lista_entity_1.ListaEntity)
], ItemEntity.prototype, "lista", void 0);
exports.ItemEntity = ItemEntity = __decorate([
    (0, typeorm_1.Entity)('item-carrinho')
], ItemEntity);
//# sourceMappingURL=item.entity.js.map