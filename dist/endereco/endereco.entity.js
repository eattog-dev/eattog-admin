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
exports.EnderecoEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../users/user.entity");
let EnderecoEntity = class EnderecoEntity {
};
exports.EnderecoEntity = EnderecoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EnderecoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', nullable: false }),
    __metadata("design:type", Number)
], EnderecoEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnderecoEntity.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnderecoEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnderecoEntity.prototype, "municipio", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnderecoEntity.prototype, "logradouro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnderecoEntity.prototype, "numero_residencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnderecoEntity.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnderecoEntity.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.addresses),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], EnderecoEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnderecoEntity.prototype, "data_criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnderecoEntity.prototype, "data_alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EnderecoEntity.prototype, "isActive", void 0);
exports.EnderecoEntity = EnderecoEntity = __decorate([
    (0, typeorm_1.Entity)('endereco')
], EnderecoEntity);
//# sourceMappingURL=endereco.entity.js.map