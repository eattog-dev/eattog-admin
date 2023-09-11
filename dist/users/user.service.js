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
const bcrypt = require("bcrypt");
let UserService = exports.UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    getUsers() {
        return this.usersRepository.find();
    }
    createUser(user) {
        const novoUser = new user_entity_1.UserEntity();
        novoUser.nome = user.nome;
        novoUser.email = user.email;
        novoUser.cpf = user.cpf;
        novoUser.numero_celular = user.numero_celular;
        novoUser.senha = bcrypt.hashSync(user.senha, 8);
        return this.usersRepository.save(novoUser);
    }
    getUser(id) {
        return this.usersRepository.findOneBy({ id: id });
    }
    async editUser(id, user) {
        const atualizarUser = await this.usersRepository.findOneBy({ id: id });
        atualizarUser.nome = user.nome;
        atualizarUser.email = user.email;
        atualizarUser.cpf = user.cpf;
        atualizarUser.numero_celular = user.numero_celular;
        atualizarUser.senha = user.senha;
        return this.usersRepository.save(atualizarUser);
    }
    deleteUser(id) {
        return this.usersRepository.delete(id);
    }
    async findByEmail(email) {
        return this.usersRepository.findOne({ where: { email: email } });
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map