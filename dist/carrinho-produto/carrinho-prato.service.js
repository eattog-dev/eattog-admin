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
exports.CarrinhoPratoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carrinho_prato_entity_1 = require("./entities/carrinho-prato.entity");
const typeorm_2 = require("typeorm");
const prato_service_1 = require("../pratos/prato.service");
let CarrinhoPratoService = class CarrinhoPratoService {
    constructor(carrinhoPratoRepository, pratoService) {
        this.carrinhoPratoRepository = carrinhoPratoRepository;
        this.pratoService = pratoService;
    }
    async verificaProdutoCarrinho(prato_id, carrinho_compra_id) {
        const carrinhoPrato = await this.carrinhoPratoRepository.findOne({
            where: {
                prato_id,
                carrinho_compra_id
            }
        });
        if (!carrinhoPrato) {
            throw new common_1.NotFoundException('Produto não encontrado no carrinho');
        }
        return carrinhoPrato;
    }
    async criaProdutoCarrinho(inserirCarrinhoCompraDTO, carrinho_compra_id) {
        return this.carrinhoPratoRepository.save({
            quantidade: inserirCarrinhoCompraDTO.quantidade,
            prato_id: inserirCarrinhoCompraDTO.productId,
            carrinho_compra_id
        });
    }
    async inserirProdutoCarrinho(inserirCarrinhoCompraDTO, carrinhoCompra) {
        await this.pratoService.getPrato(inserirCarrinhoCompraDTO.productId);
        const carrinhoPrato = await this.verificaProdutoCarrinho(inserirCarrinhoCompraDTO.productId, carrinhoCompra.id)
            .catch(() => undefined);
        if (!carrinhoPrato) {
            return this.criaProdutoCarrinho(inserirCarrinhoCompraDTO, carrinhoCompra.id);
        }
        return this.carrinhoPratoRepository.save({
            ...carrinhoPrato,
            quantidade: carrinhoPrato.quantidade + inserirCarrinhoCompraDTO.quantidade
        });
    }
};
exports.CarrinhoPratoService = CarrinhoPratoService;
exports.CarrinhoPratoService = CarrinhoPratoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrinho_prato_entity_1.CarrinhoPratoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        prato_service_1.PratoService])
], CarrinhoPratoService);
//# sourceMappingURL=carrinho-prato.service.js.map