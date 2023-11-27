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
const endereco_entity_1 = require("../../endereco/entities/endereco.entity");
const restaurante_entity_1 = require("../../restaurante/entities/restaurante.entity");
const pedido_entity_1 = require("../../pedido/entities/pedido.entity");
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
    (0, typeorm_1.Column)({ length: 15 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.numero_celular !== null),
    (0, class_validator_1.IsPhoneNumber)(null, { message: 'Número de celular inválido' }),
    __metadata("design:type", String)
], UserEntity.prototype, "numero_celular", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], UserEntity.prototype, "tipo_usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => endereco_entity_1.EnderecoEntity, (address) => address.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => restaurante_entity_1.RestauranteEntity, (rest) => rest.usuarios),
    __metadata("design:type", Array)
], UserEntity.prototype, "restaurante", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pedido_entity_1.PedidoEntity, (pedido) => pedido.usuario),
    __metadata("design:type", pedido_entity_1.PedidoEntity)
], UserEntity.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "data_criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "data_alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isActive", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], UserEntity);
//# sourceMappingURL=user.entity.js.map