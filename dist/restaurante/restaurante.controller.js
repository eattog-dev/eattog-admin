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
const platform_express_1 = require("@nestjs/platform-express");
const upload_service_1 = require("../users/upload.service");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_type_enum_1 = require("../users/enum/user-type.enum");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
let RestauranteController = class RestauranteController {
    constructor(restauranteService, uploadService) {
        this.restauranteService = restauranteService;
        this.uploadService = uploadService;
    }
    getRestaurantes() {
        return this.restauranteService.getRestaurantes();
    }
    async createRestaurante(restaurante, file, usuario_id) {
        let imagemPath = '';
        let bannerPath = '';
        let logoPath = '';
        if (file) {
            imagemPath = await this.uploadService.uploadFile(file.imagem[0]);
            bannerPath = await this.uploadService.uploadFile(file.banner[0]);
            logoPath = await this.uploadService.uploadFile(file.logo[0]);
        }
        return await this.restauranteService.createRestaurante(restaurante, imagemPath, bannerPath, logoPath, usuario_id);
    }
    getRestaurante(id) {
        return this.restauranteService.getRestaurante(id);
    }
    async editRestaurante(id, restaurante, file, usuario_id) {
        let imagemPath = '';
        let bannerPath = '';
        let logoPath = '';
        if (file) {
            imagemPath = await this.uploadService.uploadFile(file.imagem[0]);
            bannerPath = await this.uploadService.uploadFile(file.banner[0]);
            logoPath = await this.uploadService.uploadFile(file.logo[0]);
        }
        return this.restauranteService.editRestaurante(id, restaurante, imagemPath, bannerPath, logoPath, usuario_id);
    }
    deleteRestaurante(id) {
        return this.restauranteService.deleteRestaurante(id);
    }
    quantidadeRestaurantes() {
        return this.restauranteService.qtdRestaurantes();
    }
    restaurantesPagina(pagina) {
        return this.restauranteService.restaurantesPorPagina(pagina);
    }
    restaurantesProxPagina(pagina) {
        return this.restauranteService.verificaPaginacaoRestaurante(pagina);
    }
};
exports.RestauranteController = RestauranteController;
__decorate([
    (0, common_1.Get)('/restaurantes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "getRestaurantes", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin),
    (0, common_1.Post)('/criar/restaurante'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'imagem', maxCount: 1 },
        { name: 'banner', maxCount: 1 },
        { name: 'logo', maxCount: 1 },
    ])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurante_dto_1.RestauranteDTO, Object, Number]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "createRestaurante", null);
__decorate([
    (0, common_1.Get)('/restaurante/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "getRestaurante", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin),
    (0, common_1.Put)('/atualizar/restaurante/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'banner', maxCount: 1 },
        { name: 'logo', maxCount: 1 },
        { name: 'imagem', maxCount: 1 },
    ])),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __param(3, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, restaurante_dto_1.RestauranteDTO, Object, Number]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "editRestaurante", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin),
    (0, common_1.Delete)('/deletar/restaurante/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "deleteRestaurante", null);
__decorate([
    (0, common_1.Get)('/qtdRestaurantes/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RestauranteController.prototype, "quantidadeRestaurantes", null);
__decorate([
    (0, common_1.Get)('/restaurantes/:pagina'),
    __param(0, (0, common_1.Param)('pagina')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "restaurantesPagina", null);
__decorate([
    (0, common_1.Get)('/restaurantes-prox-pagina/:pagina'),
    __param(0, (0, common_1.Param)('pagina')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "restaurantesProxPagina", null);
exports.RestauranteController = RestauranteController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [restaurante_service_1.RestauranteService, upload_service_1.UploadService])
], RestauranteController);
//# sourceMappingURL=restaurante.controller.js.map