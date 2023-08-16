import { RestauranteEntity } from './restaurante.entity';
import { DeleteResult, Repository } from 'typeorm';
import { RestauranteDto } from './dto/restaurante.dto';
export declare class RestauranteService {
    private restauranteRepository;
    constructor(restauranteRepository: Repository<RestauranteEntity>);
    getRestaurantes(): Promise<RestauranteEntity[]>;
    createRestaurante(restaurante: RestauranteDto): Promise<RestauranteEntity>;
    getRestaurante(id: number): Promise<RestauranteEntity>;
    editRestaurante(id: number, restaurante: RestauranteDto): Promise<RestauranteEntity>;
    deleteRestaurante(id: number): Promise<DeleteResult>;
}
