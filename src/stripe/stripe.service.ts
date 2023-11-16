import { Injectable } from '@nestjs/common';
import { ListaEntity } from 'src/listaCompras/entities/lista.entity';
import { PratoEntity } from 'src/pratos/prato.entity';
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

    async criarSessaoCompra(lista: ListaEntity) {
        const lineItems = lista.items.map((item) => {
            return {
                price: item.prato.valorStripe,
                quantity: item.quantidade
            }
        })
        console.log(lineItems);

        const checkoutSession = await this.stripe.checkout.sessions.create({
            mode: "payment",
            line_items: lineItems,
            success_url: `http://localhost:5173/sucesso/${lista.id}`,
            cancel_url: `http://localhost:5173/falha/${lista.id}`
        });

        return checkoutSession;
    }

}
