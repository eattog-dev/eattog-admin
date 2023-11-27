import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { PedidoDTO } from './dto/pedido.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { StatusPedidoEntity } from 'src/status-pedido/entities/status-pedido.entity';
import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(PedidoEntity)
        private readonly pedidoRepository: Repository<PedidoEntity>,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        @InjectRepository(StatusPedidoEntity)
        private readonly statusRepository: Repository<StatusPedidoEntity>,
        @InjectRepository(CarrinhoCompraEntity)
        private readonly carrinhoCompraRepository: Repository<CarrinhoCompraEntity>,
    ) {
    }


}
