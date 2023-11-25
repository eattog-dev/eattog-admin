import { PratoEntity } from 'src/pratos/entities/prato.entity';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class RestauranteEntity {
    id: number;
    imagem: string;
    logo: string;
    banner: string;
    razao_social: string;
    cnpj: string;
    cep: string;
    rua: string;
    bairro: string;
    numero_endereco: string;
    cidade: string;
    estado: string;
    avaliacao: number;
    numero_telefone?: string;
    tipo_restaurante: string;
    tipo_retirada: string;
    distancia: string;
    descricao: string;
    userId: number;
    usuarios: UserEntity;
    pratos: PratoEntity[];
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
}
