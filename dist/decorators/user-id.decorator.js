"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const common_1 = require("@nestjs/common");
const base_64_converter_1 = require("../utils/base-64-converter");
exports.UserId = (0, common_1.createParamDecorator)((_, ctx) => {
    const { authorization } = ctx.switchToHttp().getRequest().headers;
    const loginPayload = (0, base_64_converter_1.authorizantionToLoginPayload)(authorization);
    return loginPayload?.id;
});
//# sourceMappingURL=user-id.decorator.js.map