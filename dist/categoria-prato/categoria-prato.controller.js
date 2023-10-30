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
exports.CategoriaPratoController = void 0;
const common_1 = require("@nestjs/common");
const categoria_prato_service_1 = require("./categoria-prato.service");
const categoria_prato_dto_1 = require("./dto/categoria-prato.dto");
let CategoriaPratoController = class CategoriaPratoController {
    constructor(categoriaPratoService) {
        this.categoriaPratoService = categoriaPratoService;
    }
    async getCategorias() {
        return this.categoriaPratoService.getCategorias();
    }
    async createCategoria(categoriaPratoDto) {
        return this.categoriaPratoService.createCategoria(categoriaPratoDto);
    }
    async getCategoria(id) {
        return this.categoriaPratoService.getCategoria(id);
    }
    async editCategoria(id, categoriaPratoDto) {
        return this.categoriaPratoService.editCategoria(id, categoriaPratoDto);
    }
    async deleteCategoria(id) {
        return this.categoriaPratoService.deleteCategoria(id);
    }
};
exports.CategoriaPratoController = CategoriaPratoController;
__decorate([
    (0, common_1.Get)('categorias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriaPratoController.prototype, "getCategorias", null);
__decorate([
    (0, common_1.Post)('criar/categoria'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categoria_prato_dto_1.CategoriaPratoDto]),
    __metadata("design:returntype", Promise)
], CategoriaPratoController.prototype, "createCategoria", null);
__decorate([
    (0, common_1.Get)('categoria-prato/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriaPratoController.prototype, "getCategoria", null);
__decorate([
    (0, common_1.Put)('atualizar/categoria-prato/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, categoria_prato_dto_1.CategoriaPratoDto]),
    __metadata("design:returntype", Promise)
], CategoriaPratoController.prototype, "editCategoria", null);
__decorate([
    (0, common_1.Delete)('deletar/categoria-prato/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriaPratoController.prototype, "deleteCategoria", null);
exports.CategoriaPratoController = CategoriaPratoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [categoria_prato_service_1.CategoriaPratoService])
], CategoriaPratoController);
//# sourceMappingURL=categoria-prato.controller.js.map