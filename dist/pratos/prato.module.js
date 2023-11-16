"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PratoModule = void 0;
const common_1 = require("@nestjs/common");
const prato_controller_1 = require("./prato.controller");
const prato_entity_1 = require("./prato.entity");
const typeorm_1 = require("@nestjs/typeorm");
const prato_service_1 = require("./prato.service");
const restaurante_entity_1 = require("../restaurante/restaurante.entity");
const categoria_prato_entity_1 = require("../categoria-prato/categoria-prato.entity");
const upload_service_1 = require("../users/upload.service");
const stripe_service_1 = require("../stripe/stripe.service");
let PratoModule = class PratoModule {
};
exports.PratoModule = PratoModule;
exports.PratoModule = PratoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([prato_entity_1.PratoEntity, restaurante_entity_1.RestauranteEntity, categoria_prato_entity_1.CategoriaPratoEntity])],
        controllers: [prato_controller_1.PratoController],
        providers: [prato_service_1.PratoService, upload_service_1.UploadService, stripe_service_1.StripeService]
    })
], PratoModule);
//# sourceMappingURL=prato.module.js.map