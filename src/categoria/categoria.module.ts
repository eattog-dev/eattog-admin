import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaService } from './categoria.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CategoriaEntity])],
    controllers: [CategoriaController],
    providers: [
        CategoriaService,],
    exports: [
        CategoriaService
    ]
})
export class CategoriaModule { }
