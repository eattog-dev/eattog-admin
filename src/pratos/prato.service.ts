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
        novoPrato.descricao = pratoDto.descricao;
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
        atualizarPrato.descricao = pratoDto.descricao;
        atualizarPrato.prato_categoria = await this.categoriaPratoRepository.findOneBy({ id: pratoDto.categoria_prato })
        atualizarPrato.restaurante = await this.restauranteRepository.findOneBy({ id: pratoDto.restaurante })

        return this.pratosRepository.save(atualizarPrato);
    }

    async deletePrato(id: number): Promise<DeleteResult> {
        return this.pratosRepository.delete(id);
    }

    async getPratosPorRestaurante(restauranteId: number): Promise<PratoEntity[]> {
        return this.pratosRepository
            .createQueryBuilder('prato')
            .innerJoin('prato.restaurante', 'restaurante')
            .where('restaurante.id = :restauranteId', { restauranteId })
            .getMany();
    }

    async getPratosComCategorias(): Promise<PratoEntity[]> {
        //return this.pratosRepository.find();
        return this.pratosRepository
            .createQueryBuilder('prato')
            .leftJoinAndSelect('prato.prato_categoria', 'categoria')
            .getMany();
    }
    async getPratosPorCategoria (categoriaID: number): Promise<PratoEntity[]>{
        return this.pratosRepository
            .createQueryBuilder('prato')
            .innerJoin('prato.prato_categoria', 'categoria_prato')
            .where('categoria_prato.id = :categoriaID', { categoriaID })
            .getMany();
    }
    async getPratosAgrupadosPorCategoriaENome(): Promise<PratoEntity[]> {
        return this.pratosRepository
              .createQueryBuilder('p')
      .select([
        'p.nome',
        'p.valor',
        'p.imagem',
        'p.desconto',
        'p.valor_desconto',
        'p.ingredientes',
        'p.descricao',
        'cp.categoria',
      ])
      .innerJoin('p.categoria', 'cp')
      .getRawMany();    
        //   .createQueryBuilder('prato')
        //   .leftJoinAndSelect('prato.prato_categoria', 'categoria_prato')
        //   .select(['categoria_prato.categoria', 'GROUP_CONCAT(prato.id) as ids'])
        // //   .from(PratoEntity, 'prato_categoria')
        //   .groupBy('categoria_prato.categoria')
        //   .getRawMany();
      }
    /*
    async getPratosPorCategoria (categoriaNome: string): Promise<PratoEntity[]>{
        return this.pratosRepository
            .createQueryBuilder('prato')
            .innerJoin('prato.prato_categoria', 'categoria_prato')
            .where('categoria_prato.categoria = :categoriaNome', { categoriaNome })
            .getMany();
    }
    */
}



