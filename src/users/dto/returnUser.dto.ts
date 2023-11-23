import { ReturnEnderecoDto } from 'src/endereco/dto/return_endereco.dto';
import { UserEntity } from '../../users/user.entity';

export class ReturnUserDto {
    id: number;
    nome: string;
    email: string;
    numero_celular: string;
    cpf: string;
    addresses?: ReturnEnderecoDto[];

    constructor(userEntity: UserEntity) {
        this.id = userEntity.id;
        this.nome = userEntity.nome;
        this.email = userEntity.email;
        this.numero_celular = userEntity.numero_celular;
        this.cpf = userEntity.cpf;
        this.addresses = userEntity.addresses ? userEntity.addresses.map((addresses) => new ReturnEnderecoDto(addresses)) : undefined;
    }
}
