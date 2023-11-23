import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { Repository } from 'typeorm';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';

@Injectable()
export class CarrinhoCompraService {
    constructor(
        @InjectRepository(CarrinhoCompraEntity)
        private readonly carrinhoRepository: Repository<CarrinhoCompraEntity>
    ) { }

    async verificaCarrinhoAtivo(usuario_id: number) {
        const carrinho = await this.carrinhoRepository.findOne({
            where: {
                usuario_id,
            }
        })

        if (!carrinho) {
            throw new NotFoundException('Carrinho ativo nao encontrado')
        }
    }

    async createCart(usuario_id: number): Promise<CarrinhoCompraEntity> {
        return this.carrinhoRepository.save({
            isActive: true,
            usuario_id,
        });
    }

    async inserirProdutoNoCarrinho(
        inserirCarrinhoDTO: InserirCarrinhoCompraDTO,
        usuario_id: number,
    ): Promise<CarrinhoCompraEntity> {
        const cart = await this.verificaCarrinhoAtivo(usuario_id).catch(() => {
            return this.createCart(usuario_id);
        });

        console.log(usuario_id);
        

        if (!cart) {
            throw new NotFoundException('Carrinho ativo não encontrado');
        }

        return cart;
    }

    // async inserirCarrinho(inserirCarrinhoCompra: InserirCarrinhoCompraDTO, usuarioId: number): Promise<CarrinhoCompraEntity> {

    // }
}
