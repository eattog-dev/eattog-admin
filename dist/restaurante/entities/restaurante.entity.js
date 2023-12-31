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
exports.RestauranteEntity = void 0;
const typeorm_1 = require("typeorm");
const prato_entity_1 = require("../../pratos/entities/prato.entity");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../users/entities/user.entity");
let RestauranteEntity = class RestauranteEntity {
};
exports.RestauranteEntity = RestauranteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RestauranteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A imagem não pode estar vazia' }),
    (0, class_validator_1.IsString)({ message: 'A imagem deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "imagem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo logo não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O campo logo deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo banner não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O campo banner deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "banner", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A razão social não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'A razão social deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "razao_social", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 18 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A razão social não pode estar vazia' }),
    (0, class_validator_1.IsString)({ message: 'A razão social deve ser uma string' }),
    (0, class_validator_1.MaxLength)(18, { message: 'A razão social não pode ter mais de 18 caracteres' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 9 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O cep não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O cep deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A rua não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'A rua deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O bairro não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O bairro deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O bairro não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O bairro deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "numero_endereco", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A cidade não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'A cidade deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O estado não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O estado deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2 }),
    (0, class_validator_1.IsNumber)({}, { message: 'A avaliação deve ser um número' }),
    __metadata("design:type", Number)
], RestauranteEntity.prototype, "avaliacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 15 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.numero_telefone !== null),
    (0, class_validator_1.IsPhoneNumber)(null, { message: 'Número de telefone inválido' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "numero_telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O tipo de refeição não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O tipo de refeição deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "tipo_restaurante", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O tipo de retirada não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O tipo de retirada deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "tipo_retirada", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.IsString)({ message: 'A distância deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "distancia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A descrição não pode estar vazia' }),
    (0, class_validator_1.IsString)({ message: 'A descrição deve ser uma string' }),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', nullable: false }),
    __metadata("design:type", Number)
], RestauranteEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.restaurante),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], RestauranteEntity.prototype, "usuarios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prato_entity_1.PratoEntity, (prato) => prato.restaurante),
    __metadata("design:type", Array)
], RestauranteEntity.prototype, "pratos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RestauranteEntity.prototype, "data_criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RestauranteEntity.prototype, "data_alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RestauranteEntity.prototype, "isActive", void 0);
exports.RestauranteEntity = RestauranteEntity = __decorate([
    (0, typeorm_1.Entity)('restaurantes')
], RestauranteEntity);
//# sourceMappingURL=restaurante.entity.js.map