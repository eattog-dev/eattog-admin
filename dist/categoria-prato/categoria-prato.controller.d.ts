import { CategoriaPratoService } from './categoria-prato.service';
import { CategoriaPratoEntity } from './categoria-prato.entity';
import { CategoriaPratoDto } from './dto/categoria-prato.dto';
import { DeleteResult } from 'typeorm';
export declare class CategoriaPratoController {
    private readonly categoriaPratoService;
    constructor(categoriaPratoService: CategoriaPratoService);
    getCategorias(): Promise<CategoriaPratoEntity[]>;
    createCategoria(categoriaPratoDto: CategoriaPratoDto): Promise<CategoriaPratoEntity>;
    getCategoria(id: number): Promise<CategoriaPratoEntity>;
    editCategoria(id: number, categoriaPratoDto: CategoriaPratoDto): Promise<CategoriaPratoEntity>;
    deleteCategoria(id: number): Promise<DeleteResult>;
}
