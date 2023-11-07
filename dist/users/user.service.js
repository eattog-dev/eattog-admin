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
const jwt_1 = require("@nestjs/jwt");
const session_dto_1 = require("./dto/session.dto");
let UserService = class UserService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async signIn(userDto) {
        const user = await this.usersRepository.findOneBy({
            email: userDto.email,
            senha: userDto.senha
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { id: user.id, email: user.email };
        return new session_dto_1.SessionDto(await this.jwtService.signAsync(payload));
    }
    signUp(userDto) {
        let user = new user_entity_1.UserEntity();
        user.nome = userDto.nome;
        user.email = userDto.email;
        user.cpf = userDto.cpf;
        user.data_aniversario = userDto.data_aniversario;
        user.cep = userDto.cep;
        user.rua = userDto.rua;
        user.complemento = userDto.complemento;
        user.bairro = userDto.bairro;
        user.numero_residencia = userDto.numero_residencia;
        user.numero_celular = userDto.numero_celular;
        user.senha = userDto.senha;
        return this.usersRepository.save(user);
    }
    async update(id, userDto) {
        let user = await this.usersRepository.findOneBy({ id: id });
        user.nome = userDto.nome;
        user.email = userDto.email;
        user.cpf = userDto.cpf;
        user.data_aniversario = userDto.data_aniversario;
        user.cep = userDto.cep;
        user.rua = userDto.rua;
        user.complemento = userDto.complemento;
        user.bairro = userDto.bairro;
        user.numero_residencia = userDto.numero_residencia;
        user.numero_celular = userDto.numero_celular;
        user.senha = userDto.senha;
        return this.usersRepository.save(user);
    }
    show(id) {
        return this.usersRepository.findOneBy({ id: id });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map