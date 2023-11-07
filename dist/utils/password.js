"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.createPasswordHashed = void 0;
const bcrypt_1 = require("bcrypt");
const createPasswordHashed = async (senha) => {
    const saltOrRounds = 10;
    return (0, bcrypt_1.hash)(senha, saltOrRounds);
};
exports.createPasswordHashed = createPasswordHashed;
const validatePassword = async (senha, passwordHashed) => {
    return (0, bcrypt_1.compare)(senha, passwordHashed);
};
exports.validatePassword = validatePassword;
//# sourceMappingURL=password.js.map