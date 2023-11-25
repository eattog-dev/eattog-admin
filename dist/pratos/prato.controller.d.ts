/// <reference types="multer" />
import { PratoDto } from './dto/prato.dto';
import { PratoEntity } from './entities/prato.entity';
import { PratoService } from './prato.service';
import { DeleteResult } from 'typeorm';
import { UploadService } from 'src/users/upload.service';
export declare class PratoController {
    private readonly pratoService;
    private readonly uploadService;
    constructor(pratoService: PratoService, uploadService: UploadService);
    getPratos(): Promise<PratoEntity[]>;
    createPrato(pratoDto: PratoDto, file: Express.Multer.File): Promise<PratoEntity>;
    getPrato(id: number): Promise<PratoEntity>;
    editPrato(id: number, pratoDto: PratoDto, file: Express.Multer.File): Promise<PratoEntity>;
    deletePrato(id: number): Promise<DeleteResult>;
    getPratosPorRestaurante(restauranteId: number): Promise<PratoEntity[]>;
    getPratosCategoria(): Promise<import("../categoria-prato/entities/categoria-prato.entity").CategoriaPratoEntity[]>;
    getPratosUCategoria(id: number): Promise<import("../categoria-prato/entities/categoria-prato.entity").CategoriaPratoEntity>;
    getPratosCategoriaLimitado(id: number): Promise<number>;
    getCategoriaPagina(categoriaID: number, pagina: number): Promise<import("../categoria-prato/entities/categoria-prato.entity").CategoriaPratoEntity[]>;
    getPratosPorPagina(restauranteId: number, pagina: number): Promise<PratoEntity[]>;
    countPratos(restauranteId: number, pagina: number): Promise<Boolean>;
}
