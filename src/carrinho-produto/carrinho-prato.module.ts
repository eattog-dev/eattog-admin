import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrinhoPratoEntity } from './entities/carrinho-prato.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CarrinhoPratoEntity])],
    controllers: [],
    providers: [],
})
export class CarrinhoPratoModule { }
