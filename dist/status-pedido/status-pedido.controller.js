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
exports.StatusPedidoController = void 0;
const common_1 = require("@nestjs/common");
const status_pedido_service_1 = require("./status-pedido.service");
const status_pedido_dto_1 = require("./dto/status-pedido.dto");
let StatusPedidoController = class StatusPedidoController {
    constructor(statusPedidoService) {
        this.statusPedidoService = statusPedidoService;
    }
    async pegaStatusAtivos() {
        return await this.statusPedidoService.todosStatusAtivos();
    }
    async pegaStatusId(id) {
        return this.statusPedidoService.pegarStatusId(id);
    }
    async pegaStatusInativos() {
        return await this.statusPedidoService.todosStatusInativos();
    }
    async criarStatus(statusPedido) {
        return this.statusPedidoService.createStatusPedido(statusPedido);
    }
    async deletarStatusID(id) {
        return this.statusPedidoService.deletarStatusId(id);
    }
};
exports.StatusPedidoController = StatusPedidoController;
__decorate([
    (0, common_1.Get)('/status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatusPedidoController.prototype, "pegaStatusAtivos", null);
__decorate([
    (0, common_1.Get)('/status/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusPedidoController.prototype, "pegaStatusId", null);
__decorate([
    (0, common_1.Get)('/status-inativos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatusPedidoController.prototype, "pegaStatusInativos", null);
__decorate([
    (0, common_1.Post)('/status'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_pedido_dto_1.StatusPedidoDTO]),
    __metadata("design:returntype", Promise)
], StatusPedidoController.prototype, "criarStatus", null);
__decorate([
    (0, common_1.Delete)('/deletar-status/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusPedidoController.prototype, "deletarStatusID", null);
exports.StatusPedidoController = StatusPedidoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [status_pedido_service_1.StatusPedidoService])
], StatusPedidoController);
//# sourceMappingURL=status-pedido.controller.js.map