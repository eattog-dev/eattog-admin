import { CarrinhoCompraController } from './carrinho-compra.controller';
import { CarrinhoCompraService } from './carrinho-compra.service';
import { Module } from '@nestjs/common';
import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrinhoPratoModule } from 'src/carrinho-produto/carrinho-prato.module';

@Module({
    imports: [TypeOrmModule.forFeature([CarrinhoCompraEntity]), CarrinhoPratoModule],
    controllers: [
        CarrinhoCompraController,],
    providers: [
        CarrinhoCompraService,],
    exports: [CarrinhoCompraService]
})
export class CarrinhoCompraModule { }
