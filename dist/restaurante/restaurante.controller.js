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
exports.RestauranteController = void 0;
const common_1 = require("@nestjs/common");
const restaurante_dto_1 = require("./dto/restaurante.dto");
const restaurante_service_1 = require("./restaurante.service");
let RestauranteController = exports.RestauranteController = class RestauranteController {
    constructor(restauranteService) {
        this.restauranteService = restauranteService;
    }
    getRestaurantes() {
        return this.restauranteService.getRestaurantes();
    }
    createRestaurante(restaurante) {
        return this.restauranteService.createRestaurante(restaurante);
    }
    getRestaurante(id) {
        return this.restauranteService.getRestaurante(id);
    }
    editRestaurante(id, restaurante) {
        return this.restauranteService.editRestaurante(id, restaurante);
    }
    deleteRestaurante(id) {
        return this.restauranteService.deleteRestaurante(id);
    }
};
__decorate([
    (0, common_1.Get)('/restaurantes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "getRestaurantes", null);
__decorate([
    (0, common_1.Post)('criar/restaurante'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurante_dto_1.RestauranteDTO]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "createRestaurante", null);
__decorate([
    (0, common_1.Get)('restaurante/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "getRestaurante", null);
__decorate([
    (0, common_1.Put)('atualizar/restaurante/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, restaurante_dto_1.RestauranteDTO]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "editRestaurante", null);
__decorate([
    (0, common_1.Delete)('deletar/restaurante/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "deleteRestaurante", null);
exports.RestauranteController = RestauranteController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [restaurante_service_1.RestauranteService])
], RestauranteController);
//# sourceMappingURL=restaurante.controller.js.map