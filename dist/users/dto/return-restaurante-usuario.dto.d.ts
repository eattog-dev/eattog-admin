import { UserEntity } from '../entities/user.entity';
import { ReturnRestauranteDto } from 'src/restaurante/dto/return-restaurante.dto';
export declare class ReturnRestauranteUserDto {
    id: number;
    nome: string;
    email: string;
    numero_celular: string;
    cpf: string;
    restaurante?: ReturnRestauranteDto[];
    constructor(userEntity: UserEntity);
}
