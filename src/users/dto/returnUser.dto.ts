import { UserEntity } from '../../users/user.entity';

export class ReturnUserDto {
    id: number;
    nome: string;
    email: string;
    numero_celular: string;
    cpf: string;

    constructor(userEntity: UserEntity) {
        this.id = userEntity.id;
        this.nome = userEntity.nome;
        this.email = userEntity.email;
        this.numero_celular = userEntity.numero_celular;
        this.cpf = userEntity.cpf;
    }
}
