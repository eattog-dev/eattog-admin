"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestauranteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const restaurante_entity_1 = require("./restaurante.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let RestauranteService = class RestauranteService {
    constructor(restauranteRepository, usuarioRepository) {
        this.restauranteRepository = restauranteRepository;
        this.usuarioRepository = usuarioRepository;
    }
    async getRestaurantes() {
        return this.restauranteRepository.find();
    }
    async createRestaurante(RestauranteDTO, imagemPath, bannerPath, logoPath, usuario_id) {
        let novoRestaurante = new restaurante_entity_1.RestauranteEntity();
        const user = await this.usuarioRepository.findOne({ where: { id: usuario_id } });
        novoRestaurante.imagem = imagemPath;
        novoRestaurante.banner = bannerPath;
        novoRestaurante.logo = logoPath;
        novoRestaurante.razao_social = RestauranteDTO.razao_social;
        novoRestaurante.cnpj = RestauranteDTO.cnpj;
        novoRestaurante.cep = RestauranteDTO.cep;
        novoRestaurante.rua = RestauranteDTO.rua;
        novoRestaurante.bairro = RestauranteDTO.bairro;
        novoRestaurante.numero_endereco = RestauranteDTO.numero_endereco;
        novoRestaurante.cidade = RestauranteDTO.cidade;
        novoRestaurante.estado = RestauranteDTO.estado;
        novoRestaurante.avaliacao = RestauranteDTO.avaliacao;
        novoRestaurante.numero_telefone = RestauranteDTO.numero_telefone;
        novoRestaurante.tipo_restaurante = RestauranteDTO.tipo_restaurante;
        novoRestaurante.tipo_retirada = RestauranteDTO.tipo_retirada;
        novoRestaurante.distancia = RestauranteDTO.distancia;
        novoRestaurante.descricao = RestauranteDTO.descricao;
        novoRestaurante.usuarios = user;
        return this.restauranteRepository.save(novoRestaurante);
    }
    async getRestaurante(id) {
        return this.restauranteRepository.findOneBy({ id: id });
    }
    async editRestaurante(id, RestauranteDTO, imagemPath, bannerPath, logoPath, usuario_id) {
        const atualizarRestaurante = await this.restauranteRepository.findOneBy({ id: id });
        if (!atualizarRestaurante) {
            return undefined;
        }
        const user = await this.usuarioRepository.findOne({ where: { id: usuario_id } });
        atualizarRestaurante.imagem = imagemPath;
        atualizarRestaurante.banner = bannerPath;
        atualizarRestaurante.logo = logoPath;
        atualizarRestaurante.razao_social = RestauranteDTO.razao_social;
        atualizarRestaurante.cnpj = RestauranteDTO.cnpj;
        atualizarRestaurante.cep = RestauranteDTO.cep;
        atualizarRestaurante.rua = RestauranteDTO.rua;
        atualizarRestaurante.bairro = RestauranteDTO.bairro;
        atualizarRestaurante.numero_endereco = RestauranteDTO.numero_endereco;
        atualizarRestaurante.cidade = RestauranteDTO.cidade;
        atualizarRestaurante.estado = RestauranteDTO.estado;
        atualizarRestaurante.avaliacao = RestauranteDTO.avaliacao;
        atualizarRestaurante.numero_telefone = RestauranteDTO.numero_telefone;
        atualizarRestaurante.tipo_restaurante = RestauranteDTO.tipo_restaurante;
        atualizarRestaurante.tipo_retirada = RestauranteDTO.tipo_retirada;
        atualizarRestaurante.distancia = RestauranteDTO.distancia;
        atualizarRestaurante.descricao = RestauranteDTO.descricao;
        atualizarRestaurante.usuarios = user;
        return this.restauranteRepository.save(atualizarRestaurante);
    }
    async deleteRestaurante(id) {
        return this.restauranteRepository.delete(id);
    }
    async qtdRestaurantes() {
        return await this.restauranteRepository.count();
    }
    async restaurantesPorPagina(pagina) {
        const perPage = 3;
        return await this.restauranteRepository
            .createQueryBuilder('restaurantes')
            .offset((pagina - 1) * perPage)
            .limit(perPage)
            .getMany();
    }
    async verificaPaginacaoRestaurante(pagina) {
        const perPage = 3;
        const itensExibidos = (pagina - 1) * perPage;
        const qtdItens = await this.qtdRestaurantes();
        return qtdItens > itensExibidos;
    }
};
exports.RestauranteService = RestauranteService;
exports.RestauranteService = RestauranteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurante_entity_1.RestauranteEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RestauranteService);
//# sourceMappingURL=restaurante.service.js.map