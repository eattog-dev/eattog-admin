import { PratoEntity } from './prato.entity';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { CategoriaPratoEntity } from 'src/categoria-prato/categoria-prato.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PratoDto } from './dto/prato.dto';
export declare class PratoService {
    private readonly pratosRepository;
    private readonly restauranteRepository;
    private readonly categoriaPratoRepository;
    constructor(pratosRepository: Repository<PratoEntity>, restauranteRepository: Repository<RestauranteEntity>, categoriaPratoRepository: Repository<CategoriaPratoEntity>);
    getPratos(): Promise<PratoEntity[]>;
    createPrato(pratoDto: PratoDto): Promise<PratoEntity>;
    getPrato(id: number): Promise<PratoEntity | undefined>;
    editPrato(id: number, pratoDto: PratoDto): Promise<PratoEntity | undefined>;
    deletePrato(id: number): Promise<DeleteResult>;
    getPratosPorRestaurante(restauranteId: number): Promise<PratoEntity[]>;
    getPratosComCategorias(): Promise<PratoEntity[]>;
    getPratosPorCategoria(): Promise<CategoriaPratoEntity[]>;
    pratosPorPagina(restauranteId: number, pagina: number): Promise<{
        itensExibir: boolean;
        itensPaginaAtual: PratoEntity[];
    }>;
    qtdPratosRestaurante(restauranteId: number): Promise<number>;
    verificaItens(restauranteId: number, pagina: number): Promise<boolean>;
}
