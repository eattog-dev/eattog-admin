"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoModule = void 0;
const pedido_controller_1 = require("./pedido.controller");
const pedido_service_1 = require("./pedido.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pedido_entity_1 = require("./entities/pedido.entity");
const user_entity_1 = require("../users/entities/user.entity");
const status_pedido_entity_1 = require("../status-pedido/entities/status-pedido.entity");
const carrinho_compra_entity_1 = require("../carrinho-compra/entities/carrinho-compra.entity");
const carrinho_compra_module_1 = require("../carrinho-compra/carrinho-compra.module");
const status_pedido_module_1 = require("../status-pedido/status-pedido.module");
const user_module_1 = require("../users/user.module");
let PedidoModule = class PedidoModule {
};
exports.PedidoModule = PedidoModule;
exports.PedidoModule = PedidoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pedido_entity_1.PedidoEntity, user_entity_1.UserEntity, status_pedido_entity_1.StatusPedidoEntity, carrinho_compra_entity_1.CarrinhoCompraEntity]), carrinho_compra_module_1.CarrinhoCompraModule, status_pedido_module_1.StatusPedidoModule, user_module_1.UserModule],
        controllers: [
            pedido_controller_1.PedidoController,
        ],
        providers: [
            pedido_service_1.PedidoService,
        ],
        exports: [pedido_service_1.PedidoService]
    })
], PedidoModule);
//# sourceMappingURL=pedido.module.js.map