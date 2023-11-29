import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PratoEntity } from './entities/prato.entity';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';
import { CategoriaPratoEntity } from 'src/categoria-prato/entities/categoria-prato.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PratoDto } from './dto/prato.dto';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class PratoService {
    constructor(
        @InjectRepository(PratoEntity)
        private readonly pratosRepository: Repository<PratoEntity>,
        @InjectRepository(RestauranteEntity)
        private readonly restauranteRepository: Repository<RestauranteEntity>,
        @InjectRepository(CategoriaPratoEntity)
        private readonly categoriaPratoRepository: Repository<CategoriaPratoEntity>,
        @Inject(StripeService)
        private readonly stripeService: StripeService
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
        novoPrato.restaurante = await this.restauranteRepository.findOneBy({ id: pratoDto.restaurante_id })
        const resposta = await this.stripeService.criarProduto(novoPrato);
        novoPrato.valorStripe = resposta.default_price
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
        atualizarPrato.restaurante = await this.restauranteRepository.findOneBy({ id: pratoDto.restaurante_id })
        const resposta = await this.stripeService.criarProduto(atualizarPrato);
        atualizarPrato.valorStripe = resposta.default_price
        console.log("adasdasdasd");
        console.log(resposta);
        console.log("asdadadasdad");
        return this.pratosRepository.save(atualizarPrato);
    }

    async deletePrato(id: number): Promise<DeleteResult> {
        const prato = await this.getPrato(id);
        await this.pratosRepository.save({
            ...prato,
            isActive: false
        })
        return {
            raw: [],
            affected: 1,
        }
    }

    async pratoAtivo(): Promise<PratoEntity[]> {
        const pratosAtivos = await this.pratosRepository
            .createQueryBuilder('prato')
            .leftJoinAndSelect('prato.prato_categoria', 'categoria')
            .where('prato.isActive = :isActive', { isActive: true })
            .limit(6)
            .getMany();

        if (!pratosAtivos || pratosAtivos.length === 0) {
            throw new NotFoundException("Não há pratos ativos");
        }

        return pratosAtivos;
    }


    async pratoInativo(): Promise<PratoEntity[]> {
        const pratoAtivo = await this.pratosRepository.find({ where: { isActive: false } })
        if (!pratoAtivo) {
            throw new NotFoundException("Não possui pratos inativos")
        }
        return pratoAtivo;
    }

    async getPratosPorRestaurante(restauranteId: number): Promise<PratoEntity[]> {
        const pratoPorRestaurante = await this.pratosRepository
            .createQueryBuilder('prato')
            .innerJoin('prato.restaurante', 'restaurante')
            .where('prato.isActive = :isActive', { isActive: true })
            .andWhere('restaurante.id = :restauranteId', { restauranteId })
            .getMany();

        if (!pratoPorRestaurante || pratoPorRestaurante.length === 0) {
            throw new NotFoundException("Não há pratos ativos para este restaurante");
        }

        return pratoPorRestaurante;
    }

    async getPratosComCategorias(): Promise<PratoEntity[]> {
        return this.pratosRepository
            .createQueryBuilder('prato')
            .leftJoinAndSelect('prato.prato_categoria', 'categoria')
            .limit(6)
            .where('prato.isActive = :isActive', { isActive: true })
            .getMany();
    }

    async pratosPorPagina(restauranteId: number, pagina: number) {
        const perPage = 2;

        return await this.pratosRepository
            .createQueryBuilder('pratos')
            .innerJoin('pratos.restaurante', 'restaurante')
            .where('restaurante.id = :restauranteId ', { restauranteId })
            .andWhere('prato.isActive = :isActive', { isActive: true })
            .offset((pagina - 1) * perPage)
            .limit(perPage)
            .getMany()
    }

    //retorna a quantidade de pratos do restaurante
    async qtdPratosAtivosRestaurante(restauranteId: number): Promise<number> {
        const itens = await this.pratosRepository
            .createQueryBuilder('prato')
            .innerJoin('prato.restaurante', 'restaurante')
            .where('restaurante.id = :restauranteId ', { restauranteId })
            .andWhere('prato.isActive = :isActive', { isActive: true })
            .select("COUNT(prato.id)", "count")
            .getRawOne();

        return itens.count
    }

    //retorna se há pratos a serem paginados 
    async verificaPaginacaoPratos(restauranteId: number, pagina: number): Promise<Boolean> {
        const perPage = 2;
        const qtdItensExibidos = (pagina - 1) * perPage;

        const qtdItens = await this.qtdPratosAtivosRestaurante(restauranteId)

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



