"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnUserDto = void 0;
class ReturnUserDto {
    constructor(userEntity) {
        this.id = userEntity.id;
        this.nome = userEntity.nome;
        this.email = userEntity.email;
        this.numero_celular = userEntity.numero_celular;
        this.cpf = userEntity.cpf;
    }
}
exports.ReturnUserDto = ReturnUserDto;
//# sourceMappingURL=returnUser.dto.js.map