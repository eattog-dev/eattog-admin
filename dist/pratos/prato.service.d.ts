import { PratoEntity } from './prato.entity';
import * as restauranteEntity from '../restaurante/restaurante.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PratoDto } from './dto/prato.dto';
export declare class PratoService {
    private readonly pratosRepository;
    private readonly restauranteRepository;
    constructor(pratosRepository: Repository<PratoEntity>, restauranteRepository: Repository<restauranteEntity.RestauranteEntity>);
    getPratos(): Promise<PratoEntity[]>;
    createPrato(pratoDto: PratoDto): Promise<PratoEntity>;
    getPrato(id: number): Promise<PratoEntity | undefined>;
    editPrato(id: number, pratoDto: PratoDto): Promise<PratoEntity | undefined>;
    deletePrato(id: number): Promise<DeleteResult>;
}
