import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { TipoEntregaEntity } from './tipoEntrega.entity';
import { TipoEntregaDto } from './dto/tipo-entrega.dto';

@Injectable()
export class TipoEntregaService {
    constructor(
        @InjectRepository(TipoEntregaEntity)
        private tipoEntregaRepository: Repository<TipoEntregaEntity>
    ) { }

    getTipoEntregas(): Promise<TipoEntregaEntity[]> {
        return this.tipoEntregaRepository.find();
    }

    createTipoEntrega(tipo: TipoEntregaDto): Promise<TipoEntregaEntity> {
        const novoIngrediente = new TipoEntregaEntity();
        novoIngrediente.nome = tipo.nome;
        return this.tipoEntregaRepository.save(novoIngrediente);
    }

    getTipoEntrega(id: number): Promise<TipoEntregaEntity> {
        return this.tipoEntregaRepository.findOneBy({ id: id });
    }

    async editTipoEntrega(id: number, tipo: TipoEntregaDto): Promise<TipoEntregaEntity> {
        const atualizarTipoEntrega = await this.tipoEntregaRepository.findOneBy({ id: id });
        if (!atualizarTipoEntrega) {
            throw new NotFoundException(`Tipo de entrega com ID ${id} não encontrada.`);
        }
        atualizarTipoEntrega.nome = tipo.nome;

        return this.tipoEntregaRepository.save(atualizarTipoEntrega);
    }

    deleteTipoEntrega(id: number): Promise<DeleteResult> {
        return this.tipoEntregaRepository.delete(id);
    }
}
