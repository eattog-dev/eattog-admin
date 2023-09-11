import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEntregaService } from './tipo-entrega.service';
import { Module } from '@nestjs/common';
import { TipoEntregaEntity } from './tipoEntrega.entity';
import { TipoEntregaController } from './tipo-entrega.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TipoEntregaEntity])],
    controllers: [TipoEntregaController],
    providers: [
        TipoEntregaService,],
    exports: [
        TipoEntregaService
    ]
})
export class TipoEntregaModule { }
