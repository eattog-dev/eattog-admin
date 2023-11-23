import { UserEntity } from 'src/users/user.entity';
export declare class EnderecoEntity {
    id: number;
    userId: number;
    cep: string;
    estado: string;
    municipio: string;
    logradouro: string;
    numero_residencia: string;
    bairro: string;
    complemento: string;
    user: UserEntity;
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
}
