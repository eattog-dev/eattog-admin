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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const session_guard_1 = require("../guards/session.guard");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./dto/user.dto");
const createUser_dto_1 = require("./dto/createUser.dto");
const user_type_enum_1 = require("./enum/user-type.enum");
const returnUser_dto_1 = require("./dto/returnUser.dto");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const return_restaurante_usuario_dto_1 = require("./dto/return-restaurante-usuario.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async getTodosUsuariosNormais() {
        return this.userService.getAllNormalUsers();
    }
    async getUsuarioId(usuarioId) {
        return new returnUser_dto_1.ReturnUserDto(await this.userService.getUserByIdUsingRelations(usuarioId));
    }
    async getUsuarioRestauranteId(usuarioId) {
        return new return_restaurante_usuario_dto_1.ReturnRestauranteUserDto(await this.userService.getUserByIdUsingRelationsRestaurante(usuarioId));
    }
    async getTodosUsuariosAdmin() {
        return this.userService.getAllAdminUsers();
    }
    update(usuarioId, updateUser) {
        return this.userService.update(usuarioId, updateUser);
    }
    async createAdmin(createUser) {
        return this.userService.criaUsuario(createUser, user_type_enum_1.UserType.Admin);
    }
    async createUser(createUser) {
        return this.userService.criaUsuario(createUser);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin),
    (0, common_1.Get)('/usuario-normal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getTodosUsuariosNormais", null);
__decorate([
    (0, common_1.Get)('/meu-perfil'),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsuarioId", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin),
    (0, common_1.Get)('/meus-restaurantes'),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsuarioRestauranteId", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin),
    (0, common_1.Get)('/usuario-admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getTodosUsuariosAdmin", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.AuthGuard),
    (0, common_1.Put)('/atualizar-usuario'),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('/cadastrar/admin'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Post)('/cadastrar/user'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersController);
//# sourceMappingURL=user.controller.js.map