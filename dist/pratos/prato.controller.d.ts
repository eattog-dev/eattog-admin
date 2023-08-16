import { PratoDto } from './dto/prato.dto';
import { PratoEntity } from './prato.entity';
import { PratoService } from './prato.service';
import { DeleteResult } from 'typeorm';
export declare class PratoController {
    private readonly pratoService;
    constructor(pratoService: PratoService);
    getPratos(): Promise<PratoEntity[]>;
    createPrato(prato: PratoEntity): Promise<PratoEntity>;
    getPrato(id: number): Promise<PratoEntity>;
    editPrato(id: number, prato: PratoDto): Promise<PratoEntity>;
    deletePrato(id: number): Promise<DeleteResult>;
}
