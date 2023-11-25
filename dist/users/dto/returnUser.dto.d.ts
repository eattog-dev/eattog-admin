import { ReturnEnderecoDto } from 'src/endereco/dto/return_endereco.dto';
import { UserEntity } from '../entities/user.entity';
export declare class ReturnUserDto {
    id: number;
    nome: string;
    email: string;
    numero_celular: string;
    cpf: string;
    addresses?: ReturnEnderecoDto[];
    constructor(userEntity: UserEntity);
}
