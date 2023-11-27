"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPedidoModule = void 0;
const status_pedido_controller_1 = require("./status-pedido.controller");
const status_pedido_service_1 = require("./status-pedido.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const status_pedido_entity_1 = require("./entities/status-pedido.entity");
let StatusPedidoModule = class StatusPedidoModule {
};
exports.StatusPedidoModule = StatusPedidoModule;
exports.StatusPedidoModule = StatusPedidoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([status_pedido_entity_1.StatusPedidoEntity])],
        controllers: [
            status_pedido_controller_1.StatusPedidoController,
        ],
        providers: [
            status_pedido_service_1.StatusPedidoService,
        ],
        exports: [status_pedido_service_1.StatusPedidoService]
    })
], StatusPedidoModule);
//# sourceMappingURL=status-pedido.module.js.map