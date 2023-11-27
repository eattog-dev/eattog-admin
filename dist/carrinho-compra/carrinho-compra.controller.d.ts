import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';
import { CarrinhoCompraService } from './carrinho-compra.service';
import { ReturnCarrinhoCompraDTO } from './dto/return-carrinho-compra.dto';
import { DeleteResult } from 'typeorm';
import { StripeService } from 'src/stripe/stripe.service';
import { PedidoService } from 'src/pedido/pedido.service';
export declare class CarrinhoCompraController {
    private readonly carrinhoCompraService;
    private readonly stripeService;
    private readonly pedidoService;
    constructor(carrinhoCompraService: CarrinhoCompraService, stripeService: StripeService, pedidoService: PedidoService);
    inserirCarrinho(criarCarrinhoCompra: InserirCarrinhoCompraDTO, usuarioId: number): Promise<CarrinhoCompraEntity>;
    findPratoUsuarioId(usuarioId: number): Promise<ReturnCarrinhoCompraDTO>;
    limparCarrinho(usuarioId: number): Promise<DeleteResult>;
    checkout(usuarioId: number): Promise<any>;
}
