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
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
let StripeService = class StripeService {
    constructor() {
        this.stripe = new stripe_1.default('sk_test_51OA2NBC2w91J4DU6gOHvAjnGyAJ6hWCSQyDoKaY8wMOyZPYelEGDiPClSu2sw9EJ49U1iNwxKpugqYWcqidFBoGY00QLtzuOCg', {
            apiVersion: '2023-10-16',
        });
    }
    async criarProduto(prato) {
        const stripeProduto = {
            name: prato.nome,
            default_price_data: {
                currency: "brl",
                unit_amount_decimal: prato.valor * 100
            }
        };
        return this.stripe.products.create(stripeProduto);
    }
    async criarSessaoCompra(lista) {
        const lineItems = lista.carrinhoProduto?.map((item) => {
            if (item && item.prato) {
                return {
                    price: item.prato.valorStripe,
                    quantity: item.quantidade
                };
            }
            return null;
        }) || [];
        if (lineItems.length === 0) {
            throw new Error('Não há itens no carrinho para criar uma sessão de checkout.');
        }
        try {
            const checkoutSession = await this.stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: lineItems,
                success_url: `http://localhost:5173/sucesso/${lista.id}`,
                cancel_url: `http://localhost:5173/falha/${lista.id}`,
            });
            return checkoutSession;
        }
        catch (error) {
            console.error(error);
            throw new Error('Erro ao criar sessão de checkout');
        }
    }
};
exports.StripeService = StripeService;
exports.StripeService = StripeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StripeService);
//# sourceMappingURL=stripe.service.js.map