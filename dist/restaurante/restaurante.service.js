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
let RestauranteService = exports.RestauranteService = class RestauranteService {
    constructor(restauranteRepository) {
        this.restauranteRepository = restauranteRepository;
    }
    async getRestaurantes() {
        return this.restauranteRepository.find();
    }
    async createRestaurante(RestauranteDTO) {
        const novoRestaurante = new restaurante_entity_1.RestauranteEntity();
        novoRestaurante.imagem = RestauranteDTO.imagem;
        novoRestaurante.logo = RestauranteDTO.logo;
        novoRestaurante.banner = RestauranteDTO.banner;
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
    async editRestaurante(id, RestauranteDTO) {
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
        atualizarRestaurante.localizacao = RestauranteDTO.localizacao;
        atualizarRestaurante.tipoRetirada = RestauranteDTO.tipoRetirada;
        atualizarRestaurante.descricao = RestauranteDTO.descricao;
        return this.restauranteRepository.save(atualizarRestaurante);
    }
    async deleteRestaurante(id) {
        return this.restauranteRepository.delete(id);
    }
};
exports.RestauranteService = RestauranteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurante_entity_1.RestauranteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RestauranteService);
//# sourceMappingURL=restaurante.service.js.map