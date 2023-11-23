"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const endereco_module_1 = require("./endereco/endereco.module");
const stripe_service_1 = require("./stripe/stripe.service");
const auth_module_1 = require("./auth/auth.module");
const upload_service_1 = require("./users/upload.service");
const lista_module_1 = require("./listaCompras/lista.module");
const categoria_prato_module_1 = require("./categoria-prato/categoria-prato.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./users/user.module");
const prato_module_1 = require("./pratos/prato.module");
const restaurante_module_1 = require("./restaurante/restaurante.module");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./guards/roles.guard");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            endereco_module_1.EnderecoModule,
            auth_module_1.AuthModule,
            lista_module_1.ListaModule,
            categoria_prato_module_1.CategoriaPratoModule,
            user_module_1.UserModule,
            prato_module_1.PratoModule,
            restaurante_module_1.RestauranteModule,
            jwt_1.JwtModule,
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
            app_controller_1.AppController
        ],
        providers: [
            stripe_service_1.StripeService,
            upload_service_1.UploadService, app_service_1.AppService, jwt_1.JwtService,
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map