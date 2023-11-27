import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { StatusPedidoEntity } from 'src/status-pedido/entities/status-pedido.entity';
import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PedidoEntity, UserEntity, StatusPedidoEntity, CarrinhoCompraEntity])],
    controllers: [
        PedidoController,],
    providers: [
        PedidoService,],
    exports: [PedidoService]
})
export class PedidoModule { }
