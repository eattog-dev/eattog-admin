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
exports.ListaController = void 0;
const common_1 = require("@nestjs/common");
const lista_service_1 = require("./lista.service");
const stripe_service_1 = require("../stripe/stripe.service");
let ListaController = class ListaController {
    constructor(listaService, stripeService) {
        this.listaService = listaService;
        this.stripeService = stripeService;
    }
    listar() {
        return this.listaService.listar();
    }
    criar(listaDto) {
        return this.listaService.criar(listaDto);
    }
    completar(id) {
        return this.listaService.completar(id);
    }
    async checkout(id) {
        const lista = await this.listaService.detalhes(id);
        return this.stripeService.criarSessaoCompra(lista);
    }
    adicionar(id, itemDto) {
        return this.listaService.adicionarItem(id, itemDto);
    }
};
exports.ListaController = ListaController;
__decorate([
    (0, common_1.Get)("/lista"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListaController.prototype, "listar", null);
__decorate([
    (0, common_1.Post)("/criar-lista"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListaController.prototype, "criar", null);
__decorate([
    (0, common_1.Put)(":id/completar"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ListaController.prototype, "completar", null);
__decorate([
    (0, common_1.Get)(":id/checkout"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ListaController.prototype, "checkout", null);
__decorate([
    (0, common_1.Put)(":id/adicionar-item"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ListaController.prototype, "adicionar", null);
exports.ListaController = ListaController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [lista_service_1.ListaService,
        stripe_service_1.StripeService])
], ListaController);
//# sourceMappingURL=lista.controller.js.map