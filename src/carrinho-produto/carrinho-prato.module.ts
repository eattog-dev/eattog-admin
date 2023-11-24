import { CarrinhoPratoService } from './carrinho-prato.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrinhoPratoEntity } from './entities/carrinho-prato.entity';
import { PratoModule } from 'src/pratos/prato.module';

@Module({
    imports: [TypeOrmModule.forFeature([CarrinhoPratoEntity]), PratoModule],
    controllers: [],
    providers: [
        CarrinhoPratoService,],
    exports: [CarrinhoPratoService]
})
export class CarrinhoPratoModule { }
