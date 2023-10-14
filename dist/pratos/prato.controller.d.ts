import { PratoDto } from './dto/prato.dto';
import { PratoEntity } from './prato.entity';
import { PratoService } from './prato.service';
import { DeleteResult } from 'typeorm';
export declare class PratoController {
    private readonly pratoService;
    constructor(pratoService: PratoService);
    getPratos(): Promise<PratoEntity[]>;
    createPrato(pratoDto: PratoDto): Promise<PratoEntity>;
    getPrato(id: number): Promise<PratoEntity>;
    editPrato(id: number, pratoDto: PratoDto): Promise<PratoEntity>;
    deletePrato(id: number): Promise<DeleteResult>;
    getPratosPorRestaurante(restauranteId: number): Promise<PratoEntity[]>;
    getPratosCategoria(): Promise<import("../categoria-prato/categoria-prato.entity").CategoriaPratoEntity[]>;
    getPratosPorPagina(restauranteId: number, pagina: number): Promise<{
        itensExibir: boolean;
        itensPaginaAtual: PratoEntity[];
    }>;
    countPratos(restauranteId: number, pagina: number): Promise<boolean>;
}
