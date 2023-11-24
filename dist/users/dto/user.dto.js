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
exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
class UserDto {
}
exports.UserDto = UserDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "nome" deve ser uma string' }),
    __metadata("design:type", String)
], UserDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'O campo "email" deve ser um endereço de e-mail válido' }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "cpf" deve ser uma string' }),
    __metadata("design:type", String)
], UserDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'O campo "data_aniversario" deve ser uma data válida' }),
    __metadata("design:type", Date)
], UserDto.prototype, "data_aniversario", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "numero_celular" deve ser uma string' }),
    __metadata("design:type", String)
], UserDto.prototype, "numero_celular", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, { message: 'A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.' }),
    __metadata("design:type", String)
], UserDto.prototype, "senha", void 0);
//# sourceMappingURL=user.dto.js.map