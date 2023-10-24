import { RestauranteEntity } from './restaurante.entity';
import { DeleteResult, Repository } from 'typeorm';
import { RestauranteDTO } from './dto/restaurante.dto';
export declare class RestauranteService {
    private restauranteRepository;
    constructor(restauranteRepository: Repository<RestauranteEntity>);
    getRestaurantes(): Promise<RestauranteEntity[]>;
    createRestaurante(RestauranteDTO: RestauranteDTO): Promise<RestauranteEntity>;
    getRestaurante(id: number): Promise<RestauranteEntity | undefined>;
    editRestaurante(id: number, RestauranteDTO: RestauranteDTO): Promise<RestauranteEntity | undefined>;
    deleteRestaurante(id: number): Promise<DeleteResult>;
}
