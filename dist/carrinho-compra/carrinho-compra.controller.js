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
exports.CarrinhoCompraController = void 0;
const common_1 = require("@nestjs/common");
const inserir_carrinho_compra_dto_1 = require("./dto/inserir-carrinho-compra.dto");
const carrinho_compra_service_1 = require("./carrinho-compra.service");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const stripe_service_1 = require("../stripe/stripe.service");
let CarrinhoCompraController = class CarrinhoCompraController {
    constructor(carrinhoCompraService, stripeService) {
        this.carrinhoCompraService = carrinhoCompraService;
        this.stripeService = stripeService;
    }
    async inserirCarrinho(criarCarrinhoCompra, usuarioId) {
        return this.carrinhoCompraService.inserirProdutoNoCarrinho(criarCarrinhoCompra, usuarioId);
    }
    async findPratoUsuarioId(usuarioId) {
        return await this.carrinhoCompraService.findCarrinhoUsuarioId(usuarioId, true);
    }
    async pegaCarrinhoId(id) {
        return this.carrinhoCompraService.findCarrinhoId(id);
    }
    async limparCarrinho(usuarioId) {
        return this.carrinhoCompraService.limpaCarrinho(usuarioId);
    }
    async checkout(usuarioId) {
        const lista = await this.carrinhoCompraService.findCarrinhoUsuarioId(usuarioId, true);
        if (!lista) {
            throw new common_1.NotFoundException('Carrinho não encontrado');
        }
        const sessaoCheckout = await this.stripeService.criarSessaoCompra(lista);
        return sessaoCheckout;
    }
};
exports.CarrinhoCompraController = CarrinhoCompraController;
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inserir_carrinho_compra_dto_1.InserirCarrinhoCompraDTO, Number]),
    __metadata("design:returntype", Promise)
], CarrinhoCompraController.prototype, "inserirCarrinho", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarrinhoCompraController.prototype, "findPratoUsuarioId", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarrinhoCompraController.prototype, "pegaCarrinhoId", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarrinhoCompraController.prototype, "limparCarrinho", null);
__decorate([
    (0, common_1.Get)("/checkout"),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarrinhoCompraController.prototype, "checkout", null);
exports.CarrinhoCompraController = CarrinhoCompraController = __decorate([
    (0, common_1.Controller)('carrinho-compra'),
    __metadata("design:paramtypes", [carrinho_compra_service_1.CarrinhoCompraService,
        stripe_service_1.StripeService])
], CarrinhoCompraController);
//# sourceMappingURL=carrinho-compra.controller.js.map