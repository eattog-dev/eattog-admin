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
exports.CarrinhoCompraService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carrinho_compra_entity_1 = require("./entities/carrinho-compra.entity");
const typeorm_2 = require("typeorm");
const carrinho_prato_service_1 = require("../carrinho-produto/carrinho-prato.service");
let CarrinhoCompraService = class CarrinhoCompraService {
    constructor(carrinhoCompraRepository, carrinhoPratoService) {
        this.carrinhoCompraRepository = carrinhoCompraRepository;
        this.carrinhoPratoService = carrinhoPratoService;
    }
    async findCarrinhoUsuarioId(usuario_id, isRelations) {
        const relations = isRelations ? {
            carrinhoProduto: {
                prato: true
            }
        } : undefined;
        let carrinho = await this.carrinhoCompraRepository.findOne({
            where: {
                usuario_id,
                isActive: true
            },
            relations,
        });
        if (!carrinho) {
            throw new common_1.NotFoundException('Carrinho ativo nao encontrado');
        }
        return carrinho;
    }
    async createCart(usuario_id) {
        return this.carrinhoCompraRepository.save({
            isActive: true,
            usuario_id,
        });
    }
    async inserirProdutoNoCarrinho(inserirCarrinhoDTO, usuario_id) {
        const cart = await this.findCarrinhoUsuarioId(usuario_id).catch(() => {
            return this.createCart(usuario_id);
        });
        await this.carrinhoPratoService.inserirProdutoCarrinho(inserirCarrinhoDTO, cart);
        return this.findCarrinhoUsuarioId(usuario_id, true);
    }
};
exports.CarrinhoCompraService = CarrinhoCompraService;
exports.CarrinhoCompraService = CarrinhoCompraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrinho_compra_entity_1.CarrinhoCompraEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        carrinho_prato_service_1.CarrinhoPratoService])
], CarrinhoCompraService);
//# sourceMappingURL=carrinho-compra.service.js.map