import { RestauranteDto } from './dto/restaurante.dto';
import { RestauranteEntity } from './restaurante.entity';
import { RestauranteService } from './restaurante.service';
import { DeleteResult } from 'typeorm';
export declare class RestauranteController {
    private readonly restauranteService;
    constructor(restauranteService: RestauranteService);
    getRestaurantes(): Promise<RestauranteEntity[]>;
    createRestaurante(restaurante: RestauranteDto): Promise<RestauranteEntity>;
    getRestaurante(id: number): Promise<RestauranteEntity>;
    editRestaurante(id: number, restaurante: RestauranteDto): Promise<RestauranteEntity>;
    deleteRestaurante(id: number): Promise<DeleteResult>;
}
