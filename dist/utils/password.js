"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.createPasswordHashed = void 0;
const bcrypt = require("bcrypt");
const createPasswordHashed = async (senha) => {
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(senha, saltRounds);
        return hashedPassword;
    }
    catch (error) {
        console.error('Erro ao criar o hash da senha:', error);
        throw error;
    }
};
exports.createPasswordHashed = createPasswordHashed;
const validatePassword = async (senha, passwordHashed) => {
    try {
        return await bcrypt.compare(senha, passwordHashed);
    }
    catch (error) {
        console.error('Erro na comparação de senhas:', error);
        return false;
    }
};
exports.validatePassword = validatePassword;
//# sourceMappingURL=password.js.map