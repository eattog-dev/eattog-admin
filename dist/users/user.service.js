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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const password_1 = require("../utils/password");
const user_type_enum_1 = require("./enum/user-type.enum");
const restaurante_entity_1 = require("../restaurante/restaurante.entity");
let UserService = class UserService {
    constructor(usersRepository, restauranteRepository) {
        this.usersRepository = usersRepository;
        this.restauranteRepository = restauranteRepository;
    }
    async criaUsuario(criaUsuario, tipoUsuario) {
        const user = await this.findUserByEmail(criaUsuario.email).catch(() => undefined);
        if (user) {
            throw new common_1.BadGatewayException('email registered in system');
        }
        const passwordHashed = await (0, password_1.createPasswordHashed)(criaUsuario.senha);
        return this.usersRepository.save({
            ...criaUsuario,
            tipo_usuario: tipoUsuario ? tipoUsuario : user_type_enum_1.UserType.User,
            senha: passwordHashed,
        });
    }
    async update(id, userDto) {
        let user = await this.usersRepository.findOneBy({ id: id });
        user.nome = userDto.nome;
        user.email = userDto.email;
        user.cpf = userDto.cpf;
        user.data_aniversario = userDto.data_aniversario;
        user.numero_celular = userDto.numero_celular;
        if (userDto.senha) {
            const passwordHashed = await (0, password_1.createPasswordHashed)(userDto.senha);
            user.senha = passwordHashed;
        }
        return this.usersRepository.save(user);
    }
    async getAllNormalUsers() {
        const normalUsers = await this.usersRepository.find({
            where: { tipo_usuario: user_type_enum_1.UserType.User },
        });
        if (!normalUsers || normalUsers.length === 0) {
            throw new common_1.NotFoundException('Não foram encontrados usuários normais.');
        }
        return normalUsers;
    }
    async getAllAdminUsers() {
        const adminUsers = await this.usersRepository.find({
            where: { tipo_usuario: user_type_enum_1.UserType.Admin },
        });
        if (!adminUsers || adminUsers.length === 0) {
            throw new common_1.NotFoundException('Não foram encontrados usuários administradores.');
        }
        return adminUsers;
    }
    async getUserByIdUsingRelations(usuarioId) {
        return this.usersRepository.findOne({
            where: {
                id: usuarioId,
            },
            relations: ['addresses'],
        });
    }
    show(id) {
        return this.usersRepository.findOneBy({ id: id });
    }
    async findUserById(userId) {
        const user = await this.usersRepository.findOne({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`UserId: ${userId} Not Found`);
        }
        return user;
    }
    async findUserByEmail(email) {
        const user = await this.usersRepository.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`Email: ${email} Not Found`);
        }
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(restaurante_entity_1.RestauranteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map