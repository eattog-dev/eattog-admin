import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { AvaliacaoEntity } from './avaliacao.entity';
import { AvaliacaoDto } from './dto/avaliacao.dto';

@Injectable()
export class AvaliacaoService {
    constructor(
        @InjectRepository(AvaliacaoEntity)
        private avaliacaoRepository: Repository<AvaliacaoEntity>
    ) { }

    getAvaliacoes(): Promise<AvaliacaoEntity[]> {
        return this.avaliacaoRepository.find();
    }

    createAvaliacoes(avaliacao: AvaliacaoDto): Promise<AvaliacaoEntity> {
        const novaAvaliacao = new AvaliacaoEntity();
        novaAvaliacao.pontuacao = avaliacao.pontuacao;
        return this.avaliacaoRepository.save(novaAvaliacao);
    }

    getAvaliacao(id: number): Promise<AvaliacaoEntity> {
        return this.avaliacaoRepository.findOneBy({ id: id });
    }

    async editAvaliacao(id: number, avaliacao: AvaliacaoDto): Promise<AvaliacaoEntity> {
        // Encontra a avaliação existente pelo ID
        const atualizarAvaliacao = await this.avaliacaoRepository.findOneBy({ id: id });
        if (!atualizarAvaliacao) {
            throw new NotFoundException(`Avaliação com ID ${id} não encontrada.`);
        }
        atualizarAvaliacao.pontuacao = avaliacao.pontuacao;

        return this.avaliacaoRepository.save(atualizarAvaliacao);
    }

    deleteAvaliacao(id: number): Promise<DeleteResult> {
        return this.avaliacaoRepository.delete(id);
    }

}
