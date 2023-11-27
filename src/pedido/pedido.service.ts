import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { StatusPedidoEntity } from 'src/status-pedido/entities/status-pedido.entity';
import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';
import { CarrinhoCompraService } from 'src/carrinho-compra/carrinho-compra.service';
import { PedidoDTO } from './dto/pedido.dto';
import { StatusPedidoService } from 'src/status-pedido/status-pedido.service';
import { UserService } from 'src/users/user.service';

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(PedidoEntity)
        private readonly pedidoRepository: Repository<PedidoEntity>,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        @InjectRepository(StatusPedidoEntity)
        private readonly statusRepository: Repository<StatusPedidoEntity>,
        private readonly statusService: StatusPedidoService,
        @InjectRepository(CarrinhoCompraEntity)
        private readonly carrinhoCompraRepository: Repository<CarrinhoCompraEntity>,
        private readonly carrinhoService: CarrinhoCompraService,
        private readonly usuarioService: UserService
    ) {
    }

    async criarPedido(pedidoDTO: PedidoDTO, usuarioId: number): Promise<PedidoEntity> {
        const usuario = await this.usuarioService.findUserById(usuarioId);
        const carrinho_compra = await this.carrinhoService.findCarrinhoUsuarioId(usuarioId)
        return this.pedidoRepository.save({
            ...pedidoDTO,
            usuario,
            carrinho_compra,
        })
    }

}