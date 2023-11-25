import { EnderecoEntity } from 'src/endereco/endereco.entity';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
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
