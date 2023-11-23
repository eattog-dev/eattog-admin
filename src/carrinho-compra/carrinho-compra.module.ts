import { CarrinhoCompraController } from './carrinho-compra.controller';
import { CarrinhoCompraService } from './carrinho-compra.service';
import { Module } from '@nestjs/common';
import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CarrinhoCompraEntity])],
    controllers: [
        CarrinhoCompraController,],
    providers: [
        CarrinhoCompraService,],
})
export class CarrinhoCompraModule { }
