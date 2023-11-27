import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';
import { CarrinhoCompraService } from './carrinho-compra.service';
import { ReturnCarrinhoCompraDTO } from './dto/return-carrinho-compra.dto';
import { DeleteResult } from 'typeorm';
import { StripeService } from 'src/stripe/stripe.service';
export declare class CarrinhoCompraController {
    private readonly carrinhoCompraService;
    private readonly stripeService;
    constructor(carrinhoCompraService: CarrinhoCompraService, stripeService: StripeService);
    inserirCarrinho(criarCarrinhoCompra: InserirCarrinhoCompraDTO, usuarioId: number): Promise<CarrinhoCompraEntity>;
    findPratoUsuarioId(usuarioId: number): Promise<ReturnCarrinhoCompraDTO>;
    pegaCarrinhoId(id: number): Promise<CarrinhoCompraEntity>;
    limparCarrinho(usuarioId: number): Promise<DeleteResult>;
    checkout(usuarioId: number): Promise<any>;
}
