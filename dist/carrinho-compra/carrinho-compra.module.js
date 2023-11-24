"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoCompraModule = void 0;
const carrinho_compra_controller_1 = require("./carrinho-compra.controller");
const carrinho_compra_service_1 = require("./carrinho-compra.service");
const common_1 = require("@nestjs/common");
const carrinho_compra_entity_1 = require("./entities/carrinho-compra.entity");
const typeorm_1 = require("@nestjs/typeorm");
const carrinho_prato_module_1 = require("../carrinho-produto/carrinho-prato.module");
const stripe_service_1 = require("../stripe/stripe.service");
let CarrinhoCompraModule = class CarrinhoCompraModule {
};
exports.CarrinhoCompraModule = CarrinhoCompraModule;
exports.CarrinhoCompraModule = CarrinhoCompraModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([carrinho_compra_entity_1.CarrinhoCompraEntity]), carrinho_prato_module_1.CarrinhoPratoModule],
        controllers: [
            carrinho_compra_controller_1.CarrinhoCompraController,
        ],
        providers: [
            carrinho_compra_service_1.CarrinhoCompraService, stripe_service_1.StripeService
        ],
        exports: [carrinho_compra_service_1.CarrinhoCompraService]
    })
], CarrinhoCompraModule);
//# sourceMappingURL=carrinho-compra.module.js.map