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
let RestauranteService = class RestauranteService {
    constructor(restauranteRepository) {
        this.restauranteRepository = restauranteRepository;
    }
    async getRestaurantes() {
        return this.restauranteRepository.find();
    }
    async createRestaurante(RestauranteDTO, imagemPath, bannerPath, logoPath) {
        let novoRestaurante = new restaurante_entity_1.RestauranteEntity();
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
    async getRestaurante(id) {
        return this.restauranteRepository.findOneBy({ id: id });
    }
    async editRestaurante(id, RestauranteDTO, filePath) {
        const atualizarRestaurante = await this.restauranteRepository.findOneBy({ id: id });
        if (!atualizarRestaurante) {
            return undefined;
        }
        atualizarRestaurante.imagem = filePath;
        atualizarRestaurante.logo = filePath;
        atualizarRestaurante.banner = filePath;
        atualizarRestaurante.titulo = RestauranteDTO.titulo;
        atualizarRestaurante.avaliacao = RestauranteDTO.avaliacao;
        atualizarRestaurante.tipoRefeicao = RestauranteDTO.tipoRefeicao;
        atualizarRestaurante.distancia = RestauranteDTO.distancia;
        atualizarRestaurante.localizacao = RestauranteDTO.localizacao;
        atualizarRestaurante.tipoRetirada = RestauranteDTO.tipoRetirada;
        atualizarRestaurante.descricao = RestauranteDTO.descricao;
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
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RestauranteService);
//# sourceMappingURL=restaurante.service.js.map