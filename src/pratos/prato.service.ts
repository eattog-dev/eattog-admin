import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PratoEntity } from './prato.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PratoDto } from './dto/prato.dto';

@Injectable()
export class PratoService {
    constructor(
        @InjectRepository(PratoEntity)
        private pratosRepository: Repository<PratoEntity>
    ) { }

    getPratos(): Promise<PratoEntity[]> {
        return this.pratosRepository.find();
    }

    createPrato(prato: PratoDto): Promise<PratoEntity> {
        const novoPrato = new PratoEntity()
        novoPrato.nome = prato.nome;
        novoPrato.valor = prato.valor;
        novoPrato.ingredientes = prato.ingredientes
        return this.pratosRepository.save(novoPrato);
    }

    getPrato(id: number): Promise<PratoEntity> {
        return this.pratosRepository.findOneBy({ id: id });
    }

    async editPrato(id: number, prato: PratoDto): Promise<PratoEntity> {
        const atualizarPrato = await this.pratosRepository.findOneBy({ id: id });
        atualizarPrato.nome = prato.nome;
        atualizarPrato.valor = prato.valor;
        atualizarPrato.ingredientes = prato.ingredientes
        return this.pratosRepository.save(atualizarPrato);
    }

    deletePrato(id: number): Promise<DeleteResult> {
        return this.pratosRepository.delete(id);
    }
}
