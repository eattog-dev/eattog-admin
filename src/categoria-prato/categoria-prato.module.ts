import { CategoriaPratoService } from './categoria-prato.service';
import { CategoriaPratoController } from './categoria-prato.controller';
import { Module } from '@nestjs/common';
import { CategoriaPratoEntity } from './entities/categoria-prato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CategoriaPratoEntity])],
    controllers: [
        CategoriaPratoController,],
    providers: [
        CategoriaPratoService,],
        exports: [CategoriaPratoService]
})
export class CategoriaPratoModule { }
