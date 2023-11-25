import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaPratoEntity } from './entities/categoria-prato.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CategoriaPratoDto } from './dto/categoria-prato.dto';

@Injectable()
export class CategoriaPratoService {
    constructor(
        @InjectRepository(CategoriaPratoEntity)
        private categoriaPratoRepository: Repository<CategoriaPratoEntity>
    ) { }

    async getCategorias(): Promise<CategoriaPratoEntity[]> {
        return this.categoriaPratoRepository.find();
    }

    async createCategoria(categoriaPratoDTO: CategoriaPratoDto): Promise<CategoriaPratoEntity> {
        const categoria_prato = new CategoriaPratoEntity();
        categoria_prato.categoria = categoriaPratoDTO.categoria_prato
        return this.categoriaPratoRepository.save(categoria_prato);
    }

    async getCategoria(id: number): Promise<CategoriaPratoEntity | undefined> {
        return this.categoriaPratoRepository.findOneBy({ id: id });
    }

    async editCategoria(id: number, categoriaPratoDTO: CategoriaPratoDto): Promise<CategoriaPratoEntity | undefined> {
        const categoria_prato = await this.categoriaPratoRepository.findOneBy({ id: id });
        if (!categoria_prato) {
            return undefined;
        }
        categoria_prato.categoria = categoriaPratoDTO.categoria_prato
        return this.categoriaPratoRepository.save(categoria_prato);
    }

    async deleteCategoria(id: number): Promise<DeleteResult> {
        return this.categoriaPratoRepository.delete(id);
    }

}
