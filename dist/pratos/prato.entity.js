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
const restaurante_entity_1 = require("../restaurante/restaurante.entity");
let PratoEntity = exports.PratoEntity = class PratoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PratoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PratoEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PratoEntity.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PratoEntity.prototype, "imagem", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => restaurante_entity_1.RestauranteEntity, restaurante => restaurante.pratos),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", restaurante_entity_1.RestauranteEntity)
], PratoEntity.prototype, "restaurante", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], PratoEntity.prototype, "ingredientes", void 0);
exports.PratoEntity = PratoEntity = __decorate([
    (0, typeorm_1.Entity)('pratos')
], PratoEntity);
//# sourceMappingURL=prato.entity.js.map