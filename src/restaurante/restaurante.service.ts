import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestauranteEntity } from './restaurante.entity';
import { DeleteResult, Repository } from 'typeorm';
import { RestauranteDto } from './dto/restaurante.dto';

@Injectable()
export class RestauranteService {
    constructor(
        @InjectRepository(RestauranteEntity)
        private restauranteRepository: Repository<RestauranteEntity>
    ) { }

    getRestaurantes(): Promise<RestauranteEntity[]> {
        return this.restauranteRepository.find();
    }

    createRestaurante(restaurante: RestauranteDto): Promise<RestauranteEntity> {
        const novoRestaurante = new RestauranteEntity()
        novoRestaurante.imagem = restaurante.imagem;
        novoRestaurante.nome = restaurante.nome;
        novoRestaurante.avaliacao = restaurante.avaliacao;
        novoRestaurante.categoria = restaurante.categoria;
        novoRestaurante.distancia = restaurante.distancia;
        novoRestaurante.delivery = restaurante.delivery;

        return this.restauranteRepository.save(novoRestaurante);
    }

    getRestaurante(id: number): Promise<RestauranteEntity> {
        return this.restauranteRepository.findOneBy({ id: id });
    }

    async editRestaurante(id: number, restaurante: RestauranteDto): Promise<RestauranteEntity> {
        const atualizarRestaurante = await this.restauranteRepository.findOneBy({ id: id });
        atualizarRestaurante.imagem = restaurante.imagem;
        atualizarRestaurante.nome = restaurante.nome;
        atualizarRestaurante.avaliacao = restaurante.avaliacao;
        atualizarRestaurante.categoria = restaurante.categoria;
        atualizarRestaurante.distancia = restaurante.distancia;
        atualizarRestaurante.delivery = restaurante.delivery;

        return this.restauranteRepository.save(atualizarRestaurante);
    }

    deleteRestaurante(id: number): Promise<DeleteResult> {
        return this.restauranteRepository.delete(id);
    }
}
