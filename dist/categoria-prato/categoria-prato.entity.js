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
exports.CategoriaPratoEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const prato_entity_1 = require("../pratos/prato.entity");
let CategoriaPratoEntity = class CategoriaPratoEntity {
    slice(arg0, arg1) {
        throw new Error('Method not implemented.');
    }
};
exports.CategoriaPratoEntity = CategoriaPratoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CategoriaPratoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CategoriaPratoEntity.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prato_entity_1.PratoEntity, prato_categoria => prato_categoria.prato_categoria, {
        eager: true
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A categoria_prato não pode ser nula.' }),
    __metadata("design:type", Array)
], CategoriaPratoEntity.prototype, "categoria_prato", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CategoriaPratoEntity.prototype, "data_criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CategoriaPratoEntity.prototype, "data_alteracao", void 0);
exports.CategoriaPratoEntity = CategoriaPratoEntity = __decorate([
    (0, typeorm_1.Entity)('categoria_prato')
], CategoriaPratoEntity);
//# sourceMappingURL=categoria-prato.entity.js.map