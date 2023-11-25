import { Injectable } from '@nestjs/common';
import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';
import { PratoEntity } from 'src/pratos/entities/prato.entity';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
    private stripe;
    constructor() {
        this.stripe = new Stripe('sk_test_51OA2NBC2w91J4DU6gOHvAjnGyAJ6hWCSQyDoKaY8wMOyZPYelEGDiPClSu2sw9EJ49U1iNwxKpugqYWcqidFBoGY00QLtzuOCg', {
            apiVersion: '2023-10-16',
        })
    }

    async criarProduto(prato: PratoEntity) {
        const stripeProduto = {
            name: prato.nome,
            default_price_data: {
                currency: "brl",
                unit_amount_decimal: prato.valor * 100
            }
        };

        return this.stripe.products.create(stripeProduto)
    }

    async criarSessaoCompra(lista: CarrinhoCompraEntity) {
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
        } catch (error) {
            // Lide com o erro de criação da sessão do Stripe aqui
            console.error(error);
            throw new Error('Erro ao criar sessão de checkout');
        }
    }


}
