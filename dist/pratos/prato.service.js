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
const restaurante_entity_1 = require("../restaurante/restaurante.entity");
const categoria_prato_entity_1 = require("../categoria-prato/categoria-prato.entity");
const typeorm_2 = require("typeorm");
const stripe_service_1 = require("../stripe/stripe.service");
let PratoService = class PratoService {
    constructor(pratosRepository, restauranteRepository, categoriaPratoRepository, stripeService) {
        this.pratosRepository = pratosRepository;
        this.restauranteRepository = restauranteRepository;
        this.categoriaPratoRepository = categoriaPratoRepository;
        this.stripeService = stripeService;
    }
    async getPratos() {
        return this.pratosRepository.find();
    }
    async createPrato(pratoDto, filePath) {
        const novoPrato = new prato_entity_1.PratoEntity();
        novoPrato.nome = pratoDto.nome;
        novoPrato.valor = pratoDto.valor;
        novoPrato.imagem = filePath;
        novoPrato.ingredientes = pratoDto.ingredientes;
        novoPrato.tempo_preparo = pratoDto.tempo_preparo;
        novoPrato.desconto = pratoDto.desconto;
        novoPrato.valor_desconto = pratoDto.valor_desconto;
        novoPrato.descricao = pratoDto.descricao;
        novoPrato.prato_categoria = await this.categoriaPratoRepository.findOneBy({ id: pratoDto.categoria_prato });
        novoPrato.restaurante = await this.restauranteRepository.findOneBy({ id: pratoDto.restaurante });
        const resposta = await this.stripeService.criarProduto(novoPrato);
        novoPrato.valorStripe = resposta.default_price;
        return this.pratosRepository.save(novoPrato);
    }
    async getPrato(id) {
        return this.pratosRepository.findOneBy({ id: id });
    }
    async editPrato(id, pratoDto, filePath) {
        const atualizarPrato = await this.pratosRepository.findOneBy({ id: id });
        if (!atualizarPrato) {
            return undefined;
        }
        atualizarPrato.nome = pratoDto.nome;
        atualizarPrato.valor = pratoDto.valor;
        atualizarPrato.imagem = filePath;
        atualizarPrato.ingredientes = pratoDto.ingredientes;
        atualizarPrato.tempo_preparo = pratoDto.tempo_preparo;
        atualizarPrato.desconto = pratoDto.desconto;
        atualizarPrato.valor_desconto = pratoDto.valor_desconto;
        atualizarPrato.descricao = pratoDto.descricao;
        atualizarPrato.prato_categoria = await this.categoriaPratoRepository.findOneBy({ id: pratoDto.categoria_prato });
        atualizarPrato.restaurante = await this.restauranteRepository.findOneBy({ id: pratoDto.restaurante });
        return this.pratosRepository.save(atualizarPrato);
    }
    async deletePrato(id) {
        return this.pratosRepository.delete(id);
    }
    async getPratosPorRestaurante(restauranteId) {
        return this.pratosRepository
            .createQueryBuilder('prato')
            .innerJoin('prato.restaurante', 'restaurante')
            .where('restaurante.id = :restauranteId', { restauranteId })
            .getMany();
    }
    async getPratosComCategorias() {
        return this.pratosRepository
            .createQueryBuilder('prato')
            .leftJoinAndSelect('prato.prato_categoria', 'categoria')
            .limit(6)
            .getMany();
    }
    async pratosPorPagina(restauranteId, pagina) {
        const perPage = 2;
        return await this.pratosRepository
            .createQueryBuilder('pratos')
            .innerJoin('pratos.restaurante', 'restaurante')
            .where('restaurante.id = :restauranteId ', { restauranteId })
            .offset((pagina - 1) * perPage)
            .limit(perPage)
            .getMany();
    }
    async qtdPratosRestaurante(restauranteId) {
        const itens = await this.pratosRepository
            .createQueryBuilder('prato')
            .innerJoin('prato.restaurante', 'restaurante')
            .where('restaurante.id = :restauranteId ', { restauranteId })
            .select("COUNT(prato.id)", "count")
            .getRawOne();
        return itens.count;
    }
    async verificaPaginacaoPratos(restauranteId, pagina) {
        const perPage = 2;
        const qtdItensExibidos = (pagina - 1) * perPage;
        const qtdItens = await this.qtdPratosRestaurante(restauranteId);
        return qtdItens > qtdItensExibidos;
    }
    async getCategoriasComPratoPagina(categoriaID, pagina) {
        return this.getPratosPorCategoria();
    }
    async getPratosPorCategoria() {
        return this.categoriaPratoRepository.find();
    }
    async getPratosUmaCategoria(id) {
        return await this.categoriaPratoRepository.findOneBy({ id: id });
    }
    async qtdCategorias(categoriaID) {
        const itens = await this.categoriaPratoRepository
            .createQueryBuilder('categoria')
            .innerJoin('categoria.categoria_prato', 'categoria_prato')
            .where('categoria.id = :categoriaID ', { categoriaID })
            .select("COUNT(categoria.id)", "count")
            .getRawOne();
        return itens.count;
    }
    async verificaPaginacaoCategorias(categoriaID, pagina) {
        const perPage = 2;
        const qtdItensExibidos = (pagina - 1) * perPage;
        const qtdItens = await this.qtdCategorias(categoriaID);
        return qtdItens > qtdItensExibidos;
    }
};
exports.PratoService = PratoService;
exports.PratoService = PratoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prato_entity_1.PratoEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(restaurante_entity_1.RestauranteEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(categoria_prato_entity_1.CategoriaPratoEntity)),
    __param(3, (0, common_1.Inject)(stripe_service_1.StripeService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        stripe_service_1.StripeService])
], PratoService);
//# sourceMappingURL=prato.service.js.map