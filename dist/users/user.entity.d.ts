import { EnderecoEntity } from 'src/endereco/endereco.entity';
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
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
}
