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
exports.ListaEntity = void 0;
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./item.entity");
const class_validator_1 = require("class-validator");
let ListaEntity = exports.ListaEntity = class ListaEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ListaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome da lista não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O nome da lista deve ser uma string' }),
    __metadata("design:type", String)
], ListaEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O estado da lista não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O estado da lista deve ser uma string' }),
    __metadata("design:type", String)
], ListaEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.ItemEntity, (item) => item.lista, {
        eager: true,
    }),
    __metadata("design:type", Array)
], ListaEntity.prototype, "items", void 0);
exports.ListaEntity = ListaEntity = __decorate([
    (0, typeorm_1.Entity)('lista-carrinho')
], ListaEntity);
//# sourceMappingURL=lista.entity.js.map