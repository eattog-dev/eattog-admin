import { Module } from '@nestjs/common';
import { PratoController } from './prato.controller';
import { PratoEntity } from './prato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PratoService } from './prato.service';

@Module({
  imports: [TypeOrmModule.forFeature([PratoEntity])],
  controllers: [PratoController],
  providers: [PratoService],
})
export class PratoModule {}