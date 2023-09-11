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
exports.PratoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const prato_entity_1 = require("./prato.entity");
const restauranteEntity = require("../restaurante/restaurante.entity");
const typeorm_2 = require("typeorm");
let PratoService = exports.PratoService = class PratoService {
    constructor(pratosRepository, restauranteRepository) {
        this.pratosRepository = pratosRepository;
        this.restauranteRepository = restauranteRepository;
    }
    async getPratos() {
        return this.pratosRepository.find();
    }
    async createPrato(pratoDto) {
        const novoPrato = new prato_entity_1.PratoEntity();
        novoPrato.nome = pratoDto.nome;
        novoPrato.valor = pratoDto.valor;
        novoPrato.imagem = pratoDto.imagem;
        novoPrato.ingredientes = pratoDto.ingredientes;
        novoPrato.restaurante = await this.restauranteRepository.findOneBy({ id: pratoDto.restaurante });
        return this.pratosRepository.save(novoPrato);
    }
    async getPrato(id) {
        return this.pratosRepository.findOneBy({ id: id });
    }
    async editPrato(id, pratoDto) {
        const atualizarPrato = await this.pratosRepository.findOneBy({ id: id });
        if (!atualizarPrato) {
            return undefined;
        }
        atualizarPrato.nome = pratoDto.nome;
        atualizarPrato.valor = pratoDto.valor;
        atualizarPrato.imagem = pratoDto.imagem;
        atualizarPrato.ingredientes = pratoDto.ingredientes;
        atualizarPrato.restaurante = await this.restauranteRepository.findOneBy({ id: pratoDto.restaurante });
        return this.pratosRepository.save(atualizarPrato);
    }
    async deletePrato(id) {
        return this.pratosRepository.delete(id);
    }
};
exports.PratoService = PratoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prato_entity_1.PratoEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(restauranteEntity.RestauranteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PratoService);
//# sourceMappingURL=prato.service.js.map