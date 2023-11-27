import { CarrinhoCompraController } from './carrinho-compra.controller';
import { CarrinhoCompraService } from './carrinho-compra.service';
import { Module } from '@nestjs/common';
import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrinhoPratoModule } from 'src/carrinho-produto/carrinho-prato.module';
import { StripeService } from 'src/stripe/stripe.service';
import { PedidoService } from 'src/pedido/pedido.service';
import { PedidoEntity } from 'src/pedido/entities/pedido.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';
import { PratoEntity } from 'src/pratos/entities/prato.entity';
import { StatusPedidoEntity } from 'src/status-pedido/entities/status-pedido.entity';
import { StatusPedidoService } from 'src/status-pedido/status-pedido.service';
import { UserService } from 'src/users/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([CarrinhoCompraEntity, PedidoEntity, UserEntity, RestauranteEntity, PratoEntity, StatusPedidoEntity]), CarrinhoPratoModule],
    controllers: [
        CarrinhoCompraController,],
    providers: [
        CarrinhoCompraService, StripeService, PedidoService, StatusPedidoService, UserService],
    exports: [CarrinhoCompraService]
})
export class CarrinhoCompraModule { }
