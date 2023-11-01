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

    async createPrato(pratoDto: PratoDto, filePath: string): Promise<PratoEntity> {
        const novoPrato = new PratoEntity();
        novoPrato.nome = pratoDto.nome;
        novoPrato.valor = pratoDto.valor;
        novoPrato.imagem = filePath;
        novoPrato.ingredientes = pratoDto.ingredientes;
        novoPrato.tempo_preparo = pratoDto.tempo_preparo;
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

    async editPrato(id: number, pratoDto: PratoDto, filePath: string): Promise<PratoEntity | undefined> {
        const atualizarPrato = await this.pratosRepository.findOneBy({ id: id });
        if (!atualizarPrato) {
            return undefined;
        }
        atualizarPrato.nome = pratoDto.nome;
        atualizarPrato.valor = pratoDto.valor;
        atualizarPrato.imagem = filePath;
        atualizarPrato.ingredientes = pratoDto.ingredientes;
        atualizarPrato.tempo_preparo = pratoDto.tempo_preparo;
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
            .limit(6)
            .getMany();
    }


    //retorna x pratos por paginaçao 
    async pratosPorPagina(restauranteId: number, pagina: number) {
        const perPage = 2;

        return await this.pratosRepository
            .createQueryBuilder('pratos')
            .innerJoin('pratos.restaurante', 'restaurante')
            .where('restaurante.id = :restauranteId ', { restauranteId })
            .offset((pagina - 1) * perPage)
            .limit(perPage)
            .getMany()
    }

    //retorna a quantidade de pratos do restaurante
    async qtdPratosRestaurante(restauranteId: number): Promise<number> {
        const itens = await this.pratosRepository
            .createQueryBuilder('prato')
            .innerJoin('prato.restaurante', 'restaurante')
            .where('restaurante.id = :restauranteId ', { restauranteId })
            .select("COUNT(prato.id)", "count")
            .getRawOne();

        return itens.count
    }

    //retorna se há pratos a serem paginados 
    async verificaPaginacaoPratos(restauranteId: number, pagina: number): Promise<Boolean> {
        const perPage = 2;
        const qtdItensExibidos = (pagina - 1) * perPage;

        const qtdItens = await this.qtdPratosRestaurante(restauranteId)

        return qtdItens > qtdItensExibidos
    }

    async getCategoriasComPratoPagina(categoriaID: number, pagina: number): Promise<CategoriaPratoEntity[]> {
        //     const perPage = 2;

        //     const categoriaPratos = await this.categoriaPratoRepository
        //     .createQueryBuilder('categoriaPrato')
        //     .leftJoinAndSelect('categoriaPrato.id', 'id')
        //     //.where('categoriaPrato.id = :categoriaID ', { categoriaID })
        //     //.limit(3) // Limita a 3 categorias
        //     .getMany();

        //   // Limita a 3 pratos por categoria
        // //   categoriaPratos.forEach((categoriaPrato) => {
        // //     categoriaPrato = categoriaPrato.slice(0, 3);
        // //   });

        //   return categoriaPratos;
        return this.getPratosPorCategoria()

    }

    //retorna todos pratos de todas categorias separadamente 
    async getPratosPorCategoria(): Promise<CategoriaPratoEntity[]> {
        return this.categoriaPratoRepository.find();
    }

    //retorna todos os pratos de uma categoria especifica 
    async getPratosUmaCategoria(id: number): Promise<CategoriaPratoEntity> {
        return await this.categoriaPratoRepository.findOneBy({ id: id });
    }

    //retorna a quantidade de categorias
    async qtdCategorias(categoriaID: number): Promise<number> {
        const itens = await this.categoriaPratoRepository
            .createQueryBuilder('categoria')
            .innerJoin('categoria.categoria_prato', 'categoria_prato')
            .where('categoria.id = :categoriaID ', { categoriaID })
            .select("COUNT(categoria.id)", "count")
            .getRawOne();

        return itens.count
    }

    //retorna se há categorias a serem paginadas
    async verificaPaginacaoCategorias(categoriaID: number, pagina: number): Promise<Boolean> {
        const perPage = 2;
        const qtdItensExibidos = (pagina - 1) * perPage;

        const qtdItens = await this.qtdCategorias(categoriaID)

        return qtdItens > qtdItensExibidos
    }
}



