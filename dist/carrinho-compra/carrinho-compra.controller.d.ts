import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';
import { CarrinhoCompraService } from './carrinho-compra.service';
import { ReturnCarrinhoCompraDTO } from './dto/return-carrinho-compra.dto';
import { DeleteResult } from 'typeorm';
export declare class CarrinhoCompraController {
    private readonly carrinhoCompraService;
    constructor(carrinhoCompraService: CarrinhoCompraService);
    inserirCarrinho(criarCarrinhoCompra: InserirCarrinhoCompraDTO, usuarioId: number): Promise<CarrinhoCompraEntity>;
    findPratoUsuarioId(usuarioId: number): Promise<ReturnCarrinhoCompraDTO>;
    limparCarrinho(usuarioId: number): Promise<DeleteResult>;
}
