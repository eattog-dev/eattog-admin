export declare const createPasswordHashed: (senha: string) => Promise<string>;
export declare const validatePassword: (senha: string, passwordHashed: string) => Promise<boolean>;
