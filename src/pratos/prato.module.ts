import { Module } from '@nestjs/common';
import { PratoController } from './prato.controller';
import { PratoEntity } from './prato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PratoService } from './prato.service';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PratoEntity, RestauranteEntity])],
  controllers: [PratoController],
  providers: [PratoService]
})
export class PratoModule {}