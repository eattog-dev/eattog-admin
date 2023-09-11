import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaDto } from './dto/categoria.dto';


@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(CategoriaEntity)
        private categoriaRespository: Repository<CategoriaEntity>
    ) { }

    getCategorias(): Promise<CategoriaEntity[]> {
        return this.categoriaRespository.find();
    }

    createCategoria(categoria: CategoriaDto): Promise<CategoriaEntity> {
        const novaCategoria = new CategoriaEntity();
        novaCategoria.nome = categoria.nome;
        // novaCategoria.pratos = categoria.pratosId;
        // novaCategoria.restaurantes = categoria.restaurantesId;
        return this.categoriaRespository.save(novaCategoria);
    }

    getCategoria(id: number): Promise<CategoriaEntity> {
        return this.categoriaRespository.findOneBy({ id: id });
    }

    async editCategoria(id: number, categoria: CategoriaDto): Promise<CategoriaEntity> {
        const atualizarCategoria = await this.categoriaRespository.findOneBy({ id: id });
        if (!atualizarCategoria) {
            throw new NotFoundException(`Categoria com ID ${id} não encontrada.`);
        }
        atualizarCategoria.nome = categoria.nome;

        return this.categoriaRespository.save(atualizarCategoria);
    }

    deleteCatedoria(id: number): Promise<DeleteResult> {
        return this.categoriaRespository.delete(id);
    }

}
