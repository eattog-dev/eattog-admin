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
exports.ListaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lista_entity_1 = require("./entities/lista.entity");
const typeorm_2 = require("typeorm");
const item_entity_1 = require("./entities/item.entity");
const prato_entity_1 = require("../pratos/prato.entity");
let ListaService = class ListaService {
    constructor(listaRepository, itemRepository, produtoRepository) {
        this.listaRepository = listaRepository;
        this.itemRepository = itemRepository;
        this.produtoRepository = produtoRepository;
    }
    detalhes(id) {
        return this.listaRepository.findOneBy({ id: id });
    }
    listar() {
        return this.listaRepository.find({});
    }
    criar(listaDto) {
        let lista = new lista_entity_1.ListaEntity();
        lista.estado = "pendente";
        return this.listaRepository.save(lista);
    }
    async completar(id) {
        let lista = await this.listaRepository.findOneBy({ id: id });
        lista.estado = "completo";
        return this.listaRepository.save(lista);
    }
    async adicionarItem(id, itemDto) {
        let lista = await this.listaRepository.findOneBy({ id: id });
        let prato = await this.produtoRepository.findOneBy({ id: itemDto.pratoId });
        if (!(lista && prato)) {
            throw new common_1.NotFoundException();
        }
        let item = new item_entity_1.ItemEntity();
        item.quantidade = 1;
        item.lista = lista;
        await this.itemRepository.save(item);
        return this.listaRepository.findOneBy({ id: id });
    }
};
exports.ListaService = ListaService;
exports.ListaService = ListaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lista_entity_1.ListaEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(item_entity_1.ItemEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(prato_entity_1.PratoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ListaService);
//# sourceMappingURL=lista.service.js.map