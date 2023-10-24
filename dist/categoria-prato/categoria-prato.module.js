"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaPratoModule = void 0;
const categoria_prato_service_1 = require("./categoria-prato.service");
const categoria_prato_controller_1 = require("./categoria-prato.controller");
const common_1 = require("@nestjs/common");
const categoria_prato_entity_1 = require("./categoria-prato.entity");
const typeorm_1 = require("@nestjs/typeorm");
let CategoriaPratoModule = exports.CategoriaPratoModule = class CategoriaPratoModule {
};
exports.CategoriaPratoModule = CategoriaPratoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([categoria_prato_entity_1.CategoriaPratoEntity])],
        controllers: [
            categoria_prato_controller_1.CategoriaPratoController,
        ],
        providers: [
            categoria_prato_service_1.CategoriaPratoService,
        ],
        exports: [categoria_prato_service_1.CategoriaPratoService]
    })
], CategoriaPratoModule);
//# sourceMappingURL=categoria-prato.module.js.map