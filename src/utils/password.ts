import { compare, hash } from 'bcrypt';

export const createPasswordHashed = async (
    senha: string,
): Promise<string> => {
    const saltOrRounds = 10;

    return hash(senha, saltOrRounds);
};

export const validatePassword = async (
    senha: string,
    passwordHashed: string,
): Promise<boolean> => {
    return compare(senha, passwordHashed);
};
