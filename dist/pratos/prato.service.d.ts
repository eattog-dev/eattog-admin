import { PratoEntity } from './prato.entity';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { CategoriaPratoEntity } from 'src/categoria-prato/categoria-prato.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PratoDto } from './dto/prato.dto';
import { StripeService } from 'src/stripe/stripe.service';
export declare class PratoService {
    private readonly pratosRepository;
    private readonly restauranteRepository;
    private readonly categoriaPratoRepository;
    private readonly stripeService;
    constructor(pratosRepository: Repository<PratoEntity>, restauranteRepository: Repository<RestauranteEntity>, categoriaPratoRepository: Repository<CategoriaPratoEntity>, stripeService: StripeService);
    getPratos(): Promise<PratoEntity[]>;
    createPrato(pratoDto: PratoDto, filePath: string): Promise<PratoEntity>;
    getPrato(id: number): Promise<PratoEntity | undefined>;
    editPrato(id: number, pratoDto: PratoDto, filePath: string): Promise<PratoEntity | undefined>;
    deletePrato(id: number): Promise<DeleteResult>;
    getPratosPorRestaurante(restauranteId: number): Promise<PratoEntity[]>;
    getPratosComCategorias(): Promise<PratoEntity[]>;
    pratosPorPagina(restauranteId: number, pagina: number): Promise<PratoEntity[]>;
    qtdPratosRestaurante(restauranteId: number): Promise<number>;
    verificaPaginacaoPratos(restauranteId: number, pagina: number): Promise<Boolean>;
    getCategoriasComPratoPagina(categoriaID: number, pagina: number): Promise<CategoriaPratoEntity[]>;
    getPratosPorCategoria(): Promise<CategoriaPratoEntity[]>;
    getPratosUmaCategoria(id: number): Promise<CategoriaPratoEntity>;
    qtdCategorias(categoriaID: number): Promise<number>;
    verificaPaginacaoCategorias(categoriaID: number, pagina: number): Promise<Boolean>;
}
