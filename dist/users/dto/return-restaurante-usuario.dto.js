"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRestauranteUserDto = void 0;
const return_restaurante_dto_1 = require("../../restaurante/dto/return-restaurante.dto");
class ReturnRestauranteUserDto {
    constructor(userEntity) {
        this.restaurante = userEntity.restaurante ? userEntity.restaurante.map((restaurante) => new return_restaurante_dto_1.ReturnRestauranteDto(restaurante)) : undefined;
    }
}
exports.ReturnRestauranteUserDto = ReturnRestauranteUserDto;
//# sourceMappingURL=return-restaurante-usuario.dto.js.map