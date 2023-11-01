import { RestauranteEntity } from './restaurante.entity';
import { DeleteResult, Repository } from 'typeorm';
import { RestauranteDTO } from './dto/restaurante.dto';
export declare class RestauranteService {
    private restauranteRepository;
    constructor(restauranteRepository: Repository<RestauranteEntity>);
    getRestaurantes(): Promise<RestauranteEntity[]>;
    createRestaurante(RestauranteDTO: RestauranteDTO, imagemPath: string, bannerPath: string, logoPath: string): Promise<RestauranteEntity>;
    getRestaurante(id: number): Promise<RestauranteEntity | undefined>;
    editRestaurante(id: number, RestauranteDTO: RestauranteDTO, imagemPath: string, bannerPath: string, logoPath: string): Promise<RestauranteEntity>;
    deleteRestaurante(id: number): Promise<DeleteResult>;
    qtdRestaurantes(): Promise<number>;
    restaurantesPorPagina(pagina: number): Promise<RestauranteEntity[]>;
    verificaPaginacaoRestaurante(pagina: number): Promise<Boolean>;
}
