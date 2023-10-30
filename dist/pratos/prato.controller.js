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
exports.PratoController = void 0;
const common_1 = require("@nestjs/common");
const prato_dto_1 = require("./dto/prato.dto");
const prato_service_1 = require("./prato.service");
let PratoController = class PratoController {
    constructor(pratoService) {
        this.pratoService = pratoService;
    }
    async getPratos() {
        return this.pratoService.getPratosComCategorias();
    }
    async createPrato(pratoDto) {
        return this.pratoService.createPrato(pratoDto);
    }
    async getPrato(id) {
        return this.pratoService.getPrato(id);
    }
    async editPrato(id, pratoDto) {
        return this.pratoService.editPrato(id, pratoDto);
    }
    async deletePrato(id) {
        return this.pratoService.deletePrato(id);
    }
    async getPratosPorRestaurante(restauranteId) {
        return this.pratoService.getPratosPorRestaurante(restauranteId);
    }
    async getPratosCategoria() {
        return this.pratoService.getPratosPorCategoria();
    }
    async getPratosUCategoria(id) {
        return this.pratoService.getPratosUmaCategoria(id);
    }
    async getPratosCategoriaLimitado(id) {
        return this.pratoService.qtdCategorias(id);
    }
    async getCategoriaPagina(categoriaID, pagina) {
        return this.pratoService.getCategoriasComPratoPagina(1, 1);
    }
    async getPratosPorPagina(restauranteId, pagina) {
        return this.pratoService.pratosPorPagina(restauranteId, pagina);
    }
    async countPratos(restauranteId, pagina) {
        return this.pratoService.verificaPaginacaoPratos(restauranteId, pagina);
    }
};
exports.PratoController = PratoController;
__decorate([
    (0, common_1.Get)('pratos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "getPratos", null);
__decorate([
    (0, common_1.Post)('criar/prato'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prato_dto_1.PratoDto]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "createPrato", null);
__decorate([
    (0, common_1.Get)('prato/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "getPrato", null);
__decorate([
    (0, common_1.Put)('atualizar/prato/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, prato_dto_1.PratoDto]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "editPrato", null);
__decorate([
    (0, common_1.Delete)('deletar/prato/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "deletePrato", null);
__decorate([
    (0, common_1.Get)('pratos-restaurante/:restauranteId'),
    __param(0, (0, common_1.Param)('restauranteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "getPratosPorRestaurante", null);
__decorate([
    (0, common_1.Get)('pratos-por-categoria/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "getPratosCategoria", null);
__decorate([
    (0, common_1.Get)('pratos-categoria/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "getPratosUCategoria", null);
__decorate([
    (0, common_1.Get)('qtd-categorias/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "getPratosCategoriaLimitado", null);
__decorate([
    (0, common_1.Get)('pagina-categoria/:categoriaID/:pagina'),
    __param(0, (0, common_1.Param)('categoriaID')),
    __param(1, (0, common_1.Param)('pagina')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "getCategoriaPagina", null);
__decorate([
    (0, common_1.Get)('pagina-cardapio/:restauranteId/:pagina'),
    __param(0, (0, common_1.Param)('restauranteId')),
    __param(1, (0, common_1.Param)('pagina')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "getPratosPorPagina", null);
__decorate([
    (0, common_1.Get)('prox-pagina/:restauranteId/:pagina'),
    __param(0, (0, common_1.Param)('restauranteId')),
    __param(1, (0, common_1.Param)('pagina')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PratoController.prototype, "countPratos", null);
exports.PratoController = PratoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [prato_service_1.PratoService])
], PratoController);
//# sourceMappingURL=prato.controller.js.map