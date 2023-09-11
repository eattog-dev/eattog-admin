import { Module } from '@nestjs/common';
import { AvaliacaoEntity } from './avaliacao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliacaoController } from './avaliacao.controller';
import { AvaliacaoService } from './avaliacao.service';

@Module({
    imports: [TypeOrmModule.forFeature([AvaliacaoEntity])],
    controllers: [
        AvaliacaoController
    ],
    providers: [
        AvaliacaoService
    ],
})
export class AvaliacaoModule { }
