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
let CarrinhoCompraService = class CarrinhoCompraService {
    constructor(carrinhoRepository) {
        this.carrinhoRepository = carrinhoRepository;
    }
    async verificaCarrinhoAtivo(usuario_id) {
        const carrinho = await this.carrinhoRepository.findOne({
            where: {
                usuario_id,
            }
        });
        if (!carrinho) {
            throw new common_1.NotFoundException('Carrinho ativo nao encontrado');
        }
    }
    async createCart(usuario_id) {
        return this.carrinhoRepository.save({
            isActive: true,
            usuario_id,
        });
    }
    async inserirProdutoNoCarrinho(inserirCarrinhoDTO, usuario_id) {
        const cart = await this.verificaCarrinhoAtivo(usuario_id).catch(() => {
            return this.createCart(usuario_id);
        });
        console.log(usuario_id);
        if (!cart) {
            throw new common_1.NotFoundException('Carrinho ativo não encontrado');
        }
        return cart;
    }
};
exports.CarrinhoCompraService = CarrinhoCompraService;
exports.CarrinhoCompraService = CarrinhoCompraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrinho_compra_entity_1.CarrinhoCompraEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarrinhoCompraService);
//# sourceMappingURL=carrinho-compra.service.js.map