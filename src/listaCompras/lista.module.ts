import { ListaService } from './lista.service';
import { ListaController } from './lista.controller';
import { Module } from '@nestjs/common';
import { ListaEntity } from './entities/lista.entity';
import { ItemEntity } from './entities/item.entity';
import { PratoEntity } from 'src/pratos/prato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ListaEntity, ItemEntity, PratoEntity])],
    controllers: [
        ListaController,],
    providers: [
        ListaService,],
})
export class ListaModule { }
