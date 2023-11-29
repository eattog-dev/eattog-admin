/// <reference types="multer" />
import { RestauranteDTO } from './dto/restaurante.dto';
import { RestauranteEntity } from './entities/restaurante.entity';
import { RestauranteService } from './restaurante.service';
import { DeleteResult } from 'typeorm';
import { UploadService } from 'src/users/upload.service';
export declare class RestauranteController {
    private readonly restauranteService;
    private readonly uploadService;
    constructor(restauranteService: RestauranteService, uploadService: UploadService);
    getRestaurantesAtivos(): Promise<RestauranteEntity[]>;
    getRestaurantesInativos(): Promise<RestauranteEntity[]>;
    createRestaurante(restaurante: RestauranteDTO, file: {
        imagem: Express.Multer.File[];
        banner: Express.Multer.File[];
        logo: Express.Multer.File[];
    }, usuario_id: number): Promise<RestauranteEntity>;
    getRestaurante(id: number): Promise<RestauranteEntity>;
    editRestaurante(id: number, restaurante: RestauranteDTO, file: {
        banner: Express.Multer.File[];
        logo: Express.Multer.File[];
        imagem: Express.Multer.File[];
    }, usuario_id: number): Promise<RestauranteEntity>;
    deleteRestaurante(id: number): Promise<DeleteResult>;
    quantidadeRestaurantes(): Promise<number>;
    restaurantesPagina(pagina: number): Promise<RestauranteEntity[]>;
    restaurantesProxPagina(pagina: number): Promise<Boolean>;
}
