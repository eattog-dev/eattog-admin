import { compare, hash } from 'bcrypt';

import * as bcrypt from 'bcrypt';

export const createPasswordHashed = async (senha: string): Promise<string> => {
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(senha, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error('Erro ao criar o hash da senha:', error);
        throw error;
    }
};


export const validatePassword = async (senha, passwordHashed) => {
    try {
        return await bcrypt.compare(senha, passwordHashed);
    } catch (error) {
        console.error('Erro na comparação de senhas:', error);
        return false;
    }
};