import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';
import { CarrinhoPratoService } from 'src/carrinho-produto/carrinho-prato.service';

const LINE_AFFECTED = 1;

@Injectable()
export class CarrinhoCompraService {
  constructor(
    @InjectRepository(CarrinhoCompraEntity)
    private readonly carrinhoCompraRepository: Repository<CarrinhoCompraEntity>,
    private readonly carrinhoPratoService: CarrinhoPratoService

  ) { }

  async limpaCarrinho(userId: number): Promise<DeleteResult> {
    const carrinho = await this.findCarrinhoUsuarioId(userId);
    await this.carrinhoCompraRepository.save({
      ...carrinho,
      isActive: false
    })
    return {
      raw: [],
      affected: LINE_AFFECTED,
    }
  }

  async findCarrinhoUsuarioId(usuario_id: number, isRelations?: boolean) {
    const relations = isRelations ? {
      carrinhoProduto: {
        prato: true
      }
    } : undefined;

    let carrinho = await this.carrinhoCompraRepository.findOne({
      where: {
        usuario_id,
        isActive: true
      },
      relations,
    })

    if (!carrinho) {
      throw new NotFoundException('Carrinho ativo nao encontrado')
    }
    return carrinho;
  }

  async createCart(usuario_id: number): Promise<CarrinhoCompraEntity> {
    return this.carrinhoCompraRepository.save({
      isActive: true,
      usuario_id,
    });
  }

  // async findCarrinhoRelacoes(userId: number): Promise<CarrinhoCompraEntity>{

  // }

  async inserirProdutoNoCarrinho(
    inserirCarrinhoDTO: InserirCarrinhoCompraDTO,
    usuario_id: number,
  ): Promise<CarrinhoCompraEntity> {
    const cart = await this.findCarrinhoUsuarioId(usuario_id).catch(() => {
      return this.createCart(usuario_id);
    });
    await this.carrinhoPratoService.inserirProdutoCarrinho(inserirCarrinhoDTO, cart)
    // return this.findCarrinhoUsuarioId(usuario_id, true);
    return cart;
  }

  // async inserirCarrinho(inserirCarrinhoCompra: InserirCarrinhoCompraDTO, usuarioId: number): Promise<CarrinhoCompraEntity> {

  // }
}
