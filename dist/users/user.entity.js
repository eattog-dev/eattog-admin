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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200, unique: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 14 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/, {
        message: 'O CPF deve estar no formato 999.999.999-99'
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "data_aniversario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 14 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.numero_celular !== null),
    (0, class_validator_1.IsPhoneNumber)(null, { message: 'Número de celular inválido' }),
    __metadata("design:type", String)
], UserEntity.prototype, "numero_celular", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "numero_residencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], UserEntity.prototype, "tipo_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20, { message: 'A senha deve ter entre 6 e 20 caracteres' }),
    __metadata("design:type", String)
], UserEntity.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isActive", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], UserEntity);
//# sourceMappingURL=user.entity.js.map