import { CategoriaPratoEntity } from './categoria-prato.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CategoriaPratoDto } from './dto/categoria-prato.dto';
export declare class CategoriaPratoService {
    private categoriaPratoRepository;
    constructor(categoriaPratoRepository: Repository<CategoriaPratoEntity>);
    getCategorias(): Promise<CategoriaPratoEntity[]>;
    createCategoria(categoriaPratoDTO: CategoriaPratoDto): Promise<CategoriaPratoEntity>;
    getCategoria(id: number): Promise<CategoriaPratoEntity | undefined>;
    editCategoria(id: number, categoriaPratoDTO: CategoriaPratoDto): Promise<CategoriaPratoEntity | undefined>;
    deleteCategoria(id: number): Promise<DeleteResult>;
}
