import { UserEntity } from '../entities/user.entity';
import { ReturnRestauranteDto } from 'src/restaurante/dto/return-restaurante.dto';

export class ReturnRestauranteUserDto {
    id: number;
    nome: string;
    email: string;
    numero_celular: string;
    cpf: string;
    restaurante?: ReturnRestauranteDto[];

    constructor(userEntity: UserEntity) {
        this.id = userEntity.id;
        this.nome = userEntity.nome;
        this.email = userEntity.email;
        this.numero_celular = userEntity.numero_celular;
        this.cpf = userEntity.cpf;
        this.restaurante = userEntity.restaurante ? userEntity.restaurante.map((restaurante) => new ReturnRestauranteDto(restaurante)) : undefined;
    }
}
