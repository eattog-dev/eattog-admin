import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestauranteEntity } from './restaurante.entity';
import { DeleteResult, FindOptionsRelations, Repository } from 'typeorm';
import { RestauranteDTO } from './dto/restaurante.dto';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class RestauranteService {
    constructor(
        @InjectRepository(RestauranteEntity)
        private restauranteRepository: Repository<RestauranteEntity>,
        @InjectRepository(UserEntity)
        private readonly usuarioRepository: Repository<UserEntity>,
    ) { }

    async getRestaurantes(): Promise<RestauranteEntity[]> {
        return this.restauranteRepository.find();
    }

    async createRestaurante(RestauranteDTO: RestauranteDTO, imagemPath: string, bannerPath: string, logoPath: string, usuario_id: number): Promise<RestauranteEntity> {
        let novoRestaurante = new RestauranteEntity();
        const user = await this.usuarioRepository.findOne({ where: { id: usuario_id } })
        novoRestaurante.imagem = imagemPath;
        novoRestaurante.banner = bannerPath;
        novoRestaurante.logo = logoPath;
        novoRestaurante.razao_social = RestauranteDTO.razao_social;
        novoRestaurante.cnpj = RestauranteDTO.cnpj;
        novoRestaurante.cep = RestauranteDTO.cep;
        novoRestaurante.rua_bairro = RestauranteDTO.rua_bairro;
        novoRestaurante.cidade = RestauranteDTO.cidade;
        novoRestaurante.avaliacao = RestauranteDTO.avaliacao;
        novoRestaurante.tipo_restaurante = RestauranteDTO.tipo_restaurante;
        novoRestaurante.tipo_retirada = RestauranteDTO.tipo_retirada;
        novoRestaurante.distancia = RestauranteDTO.distancia;
        novoRestaurante.descricao = RestauranteDTO.descricao;
        novoRestaurante.usuario = user;
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
        atualizarRestaurante.razao_social = RestauranteDTO.razao_social;
        atualizarRestaurante.cnpj = RestauranteDTO.cnpj;
        atualizarRestaurante.cep = RestauranteDTO.cep;
        atualizarRestaurante.rua_bairro = RestauranteDTO.rua_bairro;
        atualizarRestaurante.cidade = RestauranteDTO.cidade;
        atualizarRestaurante.avaliacao = RestauranteDTO.avaliacao;
        atualizarRestaurante.tipo_restaurante = RestauranteDTO.tipo_restaurante;
        atualizarRestaurante.tipo_retirada = RestauranteDTO.tipo_retirada;
        atualizarRestaurante.distancia = RestauranteDTO.distancia;
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