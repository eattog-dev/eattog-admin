import { UserEntity } from '../../users/user.entity';
export declare class ReturnUserDto {
    id: number;
    nome: string;
    email: string;
    numero_celular: string;
    cpf: string;
    constructor(userEntity: UserEntity);
}
