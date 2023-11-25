import { RestauranteEntity } from './restaurante.entity';
import { DeleteResult, Repository } from 'typeorm';
import { RestauranteDTO } from './dto/restaurante.dto';
import { UserEntity } from 'src/users/user.entity';
export declare class RestauranteService {
    private restauranteRepository;
    private readonly usuarioRepository;
    constructor(restauranteRepository: Repository<RestauranteEntity>, usuarioRepository: Repository<UserEntity>);
    getRestaurantes(): Promise<RestauranteEntity[]>;
    createRestaurante(RestauranteDTO: RestauranteDTO, imagemPath: string, bannerPath: string, logoPath: string, usuario_id: number): Promise<RestauranteEntity>;
    getRestaurante(id: number): Promise<RestauranteEntity | undefined>;
    editRestaurante(id: number, RestauranteDTO: RestauranteDTO, imagemPath: string, bannerPath: string, logoPath: string, usuario_id: number): Promise<RestauranteEntity>;
    deleteRestaurante(id: number): Promise<DeleteResult>;
    qtdRestaurantes(): Promise<number>;
    restaurantesPorPagina(pagina: number): Promise<RestauranteEntity[]>;
    verificaPaginacaoRestaurante(pagina: number): Promise<Boolean>;
}
