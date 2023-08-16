import { PratoEntity } from './prato.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PratoDto } from './dto/prato.dto';
export declare class PratoService {
    private pratosRepository;
    constructor(pratosRepository: Repository<PratoEntity>);
    getPratos(): Promise<PratoEntity[]>;
    createPrato(prato: PratoDto): Promise<PratoEntity>;
    getPrato(id: number): Promise<PratoEntity>;
    editPrato(id: number, prato: PratoDto): Promise<PratoEntity>;
    deletePrato(id: number): Promise<DeleteResult>;
}
