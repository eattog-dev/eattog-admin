import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PratoEntity } from './prato.entity';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { CategoriaPratoEntity } from 'src/categoria-prato/categoria-prato.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PratoDto } from './dto/prato.dto';

@Injectable()
export class PratoService {
    constructor(
        @InjectRepository(PratoEntity)
        private readonly pratosRepository: Repository<PratoEntity>,
        @InjectRepository(RestauranteEntity) // Correção aqui
        private readonly restauranteRepository: Repository<RestauranteEntity>, // Correção aqui
        @InjectRepository(CategoriaPratoEntity)
        private readonly categoriaPratoRepository: Repository<CategoriaPratoEntity>,
    ) { }

    async getPratos(): Promise<PratoEntity[]> {
        return this.pratosRepository.find();
    }

    async createPrato(pratoDto: PratoDto): Promise<PratoEntity> {
        const novoPrato = new PratoEntity();
        novoPrato.nome = pratoDto.nome;
        novoPrato.valor = pratoDto.valor;
        novoPrato.imagem = pratoDto.imagem;
        novoPrato.ingredientes = pratoDto.ingredientes
        novoPrato.desconto = pratoDto.desconto;
        novoPrato.valor_desconto = pratoDto.valor_desconto;
        novoPrato.prato_categoria = await this.categoriaPratoRepository.findOneBy({ id: pratoDto.categoria_prato })
        novoPrato.restaurante = await this.restauranteRepository.findOneBy({ id: pratoDto.restaurante })

        return this.pratosRepository.save(novoPrato);
    }

    async getPrato(id: number): Promise<PratoEntity | undefined> {
        return this.pratosRepository.findOneBy({ id: id });
    }

    async editPrato(id: number, pratoDto: PratoDto): Promise<PratoEntity | undefined> {
        const atualizarPrato = await this.pratosRepository.findOneBy({ id: id });
        if (!atualizarPrato) {
            return undefined;
        }
        atualizarPrato.nome = pratoDto.nome;
        atualizarPrato.valor = pratoDto.valor;
        atualizarPrato.imagem = pratoDto.imagem;
        atualizarPrato.ingredientes = pratoDto.ingredientes;
        atualizarPrato.desconto = pratoDto.desconto;
        atualizarPrato.valor_desconto = pratoDto.valor_desconto;
        atualizarPrato.prato_categoria = await this.categoriaPratoRepository.findOneBy({ id: pratoDto.categoria_prato })
        atualizarPrato.restaurante = await this.restauranteRepository.findOneBy({ id: pratoDto.restaurante })

        return this.pratosRepository.save(atualizarPrato);
    }

    async deletePrato(id: number): Promise<DeleteResult> {
        return this.pratosRepository.delete(id);
    }
}
