import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarrinhoPratoEntity } from './entities/carrinho-prato.entity';
import { Repository } from 'typeorm';
import { InserirCarrinhoCompraDTO } from 'src/carrinho-compra/dto/inserir-carrinho-compra.dto';
import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';
import { PratoService } from 'src/pratos/prato.service';

@Injectable()
export class CarrinhoPratoService {
    constructor(
        @InjectRepository(CarrinhoPratoEntity)
        private readonly carrinhoPratoRepository: Repository<CarrinhoPratoEntity>,
        private readonly pratoService: PratoService
    ) { }

    async verificaProdutoCarrinho(prato_id: number, carrinho_compra_id: number): Promise<CarrinhoPratoEntity> {
        const carrinhoPrato = await this.carrinhoPratoRepository.findOne({
            where: {
                prato_id,
                carrinho_compra_id
            }
        });
        if (!carrinhoPrato) {
            throw new NotFoundException('Produto não encontrado no carrinho')
        }
        return carrinhoPrato;
    }

    async criaProdutoCarrinho(inserirCarrinhoCompraDTO: InserirCarrinhoCompraDTO, carrinho_compra_id: number): Promise<CarrinhoPratoEntity> {
        return this.carrinhoPratoRepository.save({
            quantidade: inserirCarrinhoCompraDTO.quantidade,
            prato_id: inserirCarrinhoCompraDTO.productId,
            carrinho_compra_id
        })
    }

    async inserirProdutoCarrinho(inserirCarrinhoCompraDTO: InserirCarrinhoCompraDTO, carrinhoCompra: CarrinhoCompraEntity): Promise<CarrinhoPratoEntity> {
        await this.pratoService.getPrato(inserirCarrinhoCompraDTO.productId)

        const carrinhoPrato = await this.verificaProdutoCarrinho(inserirCarrinhoCompraDTO.productId, carrinhoCompra.id)
            .catch(() => undefined);
        if (!carrinhoPrato) {
            return this.criaProdutoCarrinho(inserirCarrinhoCompraDTO, carrinhoCompra.id)
        }
        return this.carrinhoPratoRepository.save({
            ...carrinhoPrato,
            quantidade: carrinhoPrato.quantidade + inserirCarrinhoCompraDTO.quantidade
        })

    }
}
