import { StatusPedidoController } from './status-pedido.controller';
import { StatusPedidoService } from './status-pedido.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusPedidoEntity } from './entities/status-pedido.entity';

@Module({
    imports: [TypeOrmModule.forFeature([StatusPedidoEntity])],
    controllers: [
        StatusPedidoController,],
    providers: [
        StatusPedidoService,],
    exports: [StatusPedidoService]
})
export class StatusPedidoModule { }
