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
exports.StatusPedidoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const status_pedido_entity_1 = require("./entities/status-pedido.entity");
const typeorm_2 = require("typeorm");
let StatusPedidoService = class StatusPedidoService {
    constructor(statusPedidoRepository) {
        this.statusPedidoRepository = statusPedidoRepository;
    }
    async todosStatusAtivos() {
        const statusAtivos = this.statusPedidoRepository.find({
            where: {
                isActive: true
            }
        });
        if (!statusAtivos) {
            throw new common_1.NotFoundException('Nenhum status de pedido encontrado');
        }
        return statusAtivos;
    }
    async todosStatusInativos() {
        const statusAtivos = this.statusPedidoRepository.find({
            where: {
                isActive: false
            }
        });
        if (!statusAtivos) {
            throw new common_1.NotFoundException('Não foi encontrado nenhum status de pedido inativo');
        }
        return statusAtivos;
    }
    async pegarStatusId(id) {
        const status = await this.statusPedidoRepository.findOne({
            where: {
                id: id
            }
        });
        if (!status) {
            throw new common_1.NotFoundException('Não foi encontrado nenhum status de pedido');
        }
        return status;
    }
    async createStatusPedido(statusPedidoDTO) {
        return await this.statusPedidoRepository.save(statusPedidoDTO);
    }
    async deletarStatusId(id) {
        const status = await this.statusPedidoRepository.findOne({
            where: {
                id: id,
            },
        });
        if (!status) {
            throw new common_1.NotFoundException('Status não encontrado');
        }
        status.isActive = false;
        await this.statusPedidoRepository.save(status);
        return {
            raw: [],
            affected: 1,
        };
    }
};
exports.StatusPedidoService = StatusPedidoService;
exports.StatusPedidoService = StatusPedidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(status_pedido_entity_1.StatusPedidoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StatusPedidoService);
//# sourceMappingURL=status-pedido.service.js.map