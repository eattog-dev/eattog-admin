"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnUserDto = void 0;
const return_endereco_dto_1 = require("../../endereco/dto/return_endereco.dto");
class ReturnUserDto {
    constructor(userEntity) {
        this.id = userEntity.id;
        this.nome = userEntity.nome;
        this.email = userEntity.email;
        this.numero_celular = userEntity.numero_celular;
        this.cpf = userEntity.cpf;
        this.addresses = userEntity.addresses ? userEntity.addresses.map((addresses) => new return_endereco_dto_1.ReturnEnderecoDto(addresses)) : undefined;
    }
}
exports.ReturnUserDto = ReturnUserDto;
//# sourceMappingURL=returnUser.dto.js.map