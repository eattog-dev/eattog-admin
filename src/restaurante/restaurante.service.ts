import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestauranteEntity } from './restaurante.entity';
import { DeleteResult, Repository } from 'typeorm';
import { RestauranteDTO } from './dto/restaurante.dto';

@Injectable()
export class RestauranteService {
    constructor(
        @InjectRepository(RestauranteEntity)
        private restauranteRepository: Repository<RestauranteEntity>
    ) { }

    async getRestaurantes(): Promise<RestauranteEntity[]> {
        return this.restauranteRepository.find();
    }

    async createRestaurante(RestauranteDTO: RestauranteDTO): Promise<RestauranteEntity> {
        const novoRestaurante = new RestauranteEntity();
        novoRestaurante.imagem = RestauranteDTO.imagem;
        novoRestaurante.logo = RestauranteDTO.logo;
        novoRestaurante.banner = RestauranteDTO.banner;
        novoRestaurante.titulo = RestauranteDTO.titulo;
        novoRestaurante.avaliacao = RestauranteDTO.avaliacao;
        novoRestaurante.tipoRefeicao = RestauranteDTO.tipoRefeicao;
        novoRestaurante.distancia = RestauranteDTO.distancia;
        novoRestaurante.tipoRetirada = RestauranteDTO.tipoRetirada;
        novoRestaurante.descricao = RestauranteDTO.descricao;
        return this.restauranteRepository.save(novoRestaurante);
    }

    async getRestaurante(id: number): Promise<RestauranteEntity | undefined> {
        return this.restauranteRepository.findOneBy({ id: id });
    }

    async editRestaurante(id: number, RestauranteDTO: RestauranteDTO): Promise<RestauranteEntity | undefined> {
        const atualizarRestaurante = await this.restauranteRepository.findOneBy({ id: id });
        if (!atualizarRestaurante) {
            return undefined;
        }
        atualizarRestaurante.imagem = RestauranteDTO.imagem;
        atualizarRestaurante.logo = RestauranteDTO.logo;
        atualizarRestaurante.banner = RestauranteDTO.banner;
        atualizarRestaurante.titulo = RestauranteDTO.titulo;
        atualizarRestaurante.avaliacao = RestauranteDTO.avaliacao;
        atualizarRestaurante.tipoRefeicao = RestauranteDTO.tipoRefeicao;
        atualizarRestaurante.distancia = RestauranteDTO.distancia;
        atualizarRestaurante.tipoRetirada = RestauranteDTO.tipoRetirada;
        atualizarRestaurante.descricao = RestauranteDTO.descricao;

        return this.restauranteRepository.save(atualizarRestaurante);
    }

    async deleteRestaurante(id: number): Promise<DeleteResult> {
        return this.restauranteRepository.delete(id);
    }
}
