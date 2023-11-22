"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaModule = void 0;
const lista_service_1 = require("./lista.service");
const lista_controller_1 = require("./lista.controller");
const common_1 = require("@nestjs/common");
const lista_entity_1 = require("./entities/lista.entity");
const item_entity_1 = require("./entities/item.entity");
const prato_entity_1 = require("../pratos/prato.entity");
const typeorm_1 = require("@nestjs/typeorm");
const stripe_service_1 = require("../stripe/stripe.service");
let ListaModule = class ListaModule {
};
exports.ListaModule = ListaModule;
exports.ListaModule = ListaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lista_entity_1.ListaEntity, item_entity_1.ItemEntity, prato_entity_1.PratoEntity])],
        controllers: [
            lista_controller_1.ListaController,
        ],
        providers: [
            lista_service_1.ListaService, stripe_service_1.StripeService
        ],
    })
], ListaModule);
//# sourceMappingURL=lista.module.js.map