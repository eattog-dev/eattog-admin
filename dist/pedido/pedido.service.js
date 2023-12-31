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
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pedido_entity_1 = require("./entities/pedido.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const status_pedido_entity_1 = require("../status-pedido/entities/status-pedido.entity");
const carrinho_compra_entity_1 = require("../carrinho-compra/entities/carrinho-compra.entity");
const carrinho_compra_service_1 = require("../carrinho-compra/carrinho-compra.service");
const status_pedido_service_1 = require("../status-pedido/status-pedido.service");
const user_service_1 = require("../users/user.service");
let PedidoService = class PedidoService {
    constructor(pedidoRepository, userRepository, statusRepository, statusService, carrinhoCompraRepository, carrinhoService, usuarioService) {
        this.pedidoRepository = pedidoRepository;
        this.userRepository = userRepository;
        this.statusRepository = statusRepository;
        this.statusService = statusService;
        this.carrinhoCompraRepository = carrinhoCompraRepository;
        this.carrinhoService = carrinhoService;
        this.usuarioService = usuarioService;
    }
    async criarPedido(pedidoDTO, usuarioId) {
        const usuario = await this.usuarioService.findUserById(usuarioId);
        const carrinho_compra = await this.carrinhoService.findCarrinhoUsuarioId(usuarioId);
        return this.pedidoRepository.save({
            ...pedidoDTO,
            usuario,
            carrinho_compra,
        });
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pedido_entity_1.PedidoEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(status_pedido_entity_1.StatusPedidoEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(carrinho_compra_entity_1.CarrinhoCompraEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        status_pedido_service_1.StatusPedidoService,
        typeorm_2.Repository,
        carrinho_compra_service_1.CarrinhoCompraService,
        user_service_1.UserService])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map