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

    async createRestaurante(RestauranteDTO: RestauranteDTO, imagemPath: string, bannerPath: string, logoPath: string): Promise<RestauranteEntity> {
        let novoRestaurante = new RestauranteEntity();
        novoRestaurante.imagem = imagemPath;
        novoRestaurante.banner = bannerPath;
        novoRestaurante.logo = logoPath;
        novoRestaurante.titulo = RestauranteDTO.titulo;
        novoRestaurante.avaliacao = RestauranteDTO.avaliacao;
        novoRestaurante.tipoRefeicao = RestauranteDTO.tipoRefeicao;
        novoRestaurante.distancia = RestauranteDTO.distancia;
        novoRestaurante.localizacao = RestauranteDTO.localizacao;
        novoRestaurante.tipoRetirada = RestauranteDTO.tipoRetirada;
        novoRestaurante.descricao = RestauranteDTO.descricao;
        return this.restauranteRepository.save(novoRestaurante);
    }

    async getRestaurante(id: number): Promise<RestauranteEntity | undefined> {
        return this.restauranteRepository.findOneBy({ id: id });
    }

    async editRestaurante(id: number, RestauranteDTO: RestauranteDTO, imagemPath: string, bannerPath: string, logoPath: string): Promise<RestauranteEntity> {
        const atualizarRestaurante = await this.restauranteRepository.findOneBy({ id: id });
        if (!atualizarRestaurante) {
            return undefined;
        }
        atualizarRestaurante.imagem = imagemPath;
        atualizarRestaurante.banner = bannerPath;
        atualizarRestaurante.logo = logoPath;
        atualizarRestaurante.titulo = RestauranteDTO.titulo;
        atualizarRestaurante.avaliacao = RestauranteDTO.avaliacao;
        atualizarRestaurante.tipoRefeicao = RestauranteDTO.tipoRefeicao;
        atualizarRestaurante.distancia = RestauranteDTO.distancia;
        atualizarRestaurante.localizacao = RestauranteDTO.localizacao;
        atualizarRestaurante.tipoRetirada = RestauranteDTO.tipoRetirada;
        atualizarRestaurante.descricao = RestauranteDTO.descricao;
        return this.restauranteRepository.save(atualizarRestaurante);
    }

    async deleteRestaurante(id: number): Promise<DeleteResult> {
        return this.restauranteRepository.delete(id);
    }

    //conta a quantidade de restaurantes
    async qtdRestaurantes() {
        return await this.restauranteRepository.count()
    }

    //retorna de forma paginada x quantidade de restaurantes
    async restaurantesPorPagina(pagina: number): Promise<RestauranteEntity[]> {
        const perPage = 3

        return await this.restauranteRepository
            .createQueryBuilder('restaurantes')
            .offset((pagina - 1) * perPage)
            .limit(perPage)
            .getMany()
    }

    //verifica se há itens a serem exibidos na página x
    async verificaPaginacaoRestaurante(pagina: number): Promise<Boolean> {
        const perPage = 3
        const itensExibidos = (pagina - 1) * perPage;

        const qtdItens = await this.qtdRestaurantes();

        return qtdItens > itensExibidos
    }
}
