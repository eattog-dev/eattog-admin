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
exports.CategoriaPratoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categoria_prato_entity_1 = require("./entities/categoria-prato.entity");
const typeorm_2 = require("typeorm");
let CategoriaPratoService = class CategoriaPratoService {
    constructor(categoriaPratoRepository) {
        this.categoriaPratoRepository = categoriaPratoRepository;
    }
    async getCategorias() {
        return this.categoriaPratoRepository.find();
    }
    async createCategoria(categoriaPratoDTO) {
        const categoria_prato = new categoria_prato_entity_1.CategoriaPratoEntity();
        categoria_prato.categoria = categoriaPratoDTO.categoria_prato;
        return this.categoriaPratoRepository.save(categoria_prato);
    }
    async getCategoria(id) {
        return this.categoriaPratoRepository.findOneBy({ id: id });
    }
    async editCategoria(id, categoriaPratoDTO) {
        const categoria_prato = await this.categoriaPratoRepository.findOneBy({ id: id });
        if (!categoria_prato) {
            return undefined;
        }
        categoria_prato.categoria = categoriaPratoDTO.categoria_prato;
        return this.categoriaPratoRepository.save(categoria_prato);
    }
    async deleteCategoria(id) {
        return this.categoriaPratoRepository.delete(id);
    }
};
exports.CategoriaPratoService = CategoriaPratoService;
exports.CategoriaPratoService = CategoriaPratoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categoria_prato_entity_1.CategoriaPratoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriaPratoService);
//# sourceMappingURL=categoria-prato.service.js.map