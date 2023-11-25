import { EnderecoEntity } from 'src/endereco/entities/endereco.entity';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';
export declare class UserEntity {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    data_aniversario: Date;
    numero_celular: string;
    tipo_usuario: number;
    addresses?: EnderecoEntity[];
    senha: string;
    restaurante?: RestauranteEntity[];
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
}
