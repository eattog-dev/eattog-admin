"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const avaliacao_module_1 = require("./avaliacao/avaliacao.module");
const tipo_entrega_module_1 = require("./tipo-entrega/tipo-entrega.module");
const tipo_entrega_controller_1 = require("./tipo-entrega/tipo-entrega.controller");
const categoria_module_1 = require("./categoria/categoria.module");
const categoria_controller_1 = require("./categoria/categoria.controller");
const auth_module_1 = require("./auth/auth.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./users/user.module");
const prato_module_1 = require("./pratos/prato.module");
const restaurante_module_1 = require("./restaurante/restaurante.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            avaliacao_module_1.AvaliacaoModule,
            tipo_entrega_module_1.TipoEntregaModule,
            categoria_module_1.CategoriaModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            prato_module_1.PratoModule,
            restaurante_module_1.RestauranteModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '',
                database: 'eattog',
                autoLoadEntities: true,
                synchronize: true,
            }),
        ],
        controllers: [
            tipo_entrega_controller_1.TipoEntregaController,
            categoria_controller_1.CategoriaController, app_controller_1.AppController
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map