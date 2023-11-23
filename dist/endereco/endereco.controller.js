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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecoController = void 0;
const common_1 = require("@nestjs/common");
const criar_endereco_dto_1 = require("./dto/criar_endereco.dto");
const endereco_service_1 = require("./endereco.service");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
let EnderecoController = class EnderecoController {
    constructor(enderecoService) {
        this.enderecoService = enderecoService;
    }
    async createAddress(criarEnderecoDto, usuarioId) {
        return this.enderecoService.criarEndereco(criarEnderecoDto, usuarioId);
    }
};
exports.EnderecoController = EnderecoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_endereco_dto_1.CriarEnderecoDto, Number]),
    __metadata("design:returntype", Promise)
], EnderecoController.prototype, "createAddress", null);
exports.EnderecoController = EnderecoController = __decorate([
    (0, common_1.Controller)('endereco'),
    __metadata("design:paramtypes", [endereco_service_1.EnderecoService])
], EnderecoController);
//# sourceMappingURL=endereco.controller.js.map