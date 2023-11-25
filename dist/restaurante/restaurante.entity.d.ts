import { PratoEntity } from 'src/pratos/prato.entity';
import { UserEntity } from 'src/users/user.entity';
export declare class RestauranteEntity {
    id: number;
    imagem: string;
    logo: string;
    banner: string;
    razao_social: string;
    cnpj: string;
    cep: string;
    rua_bairro: string;
    cidade: string;
    avaliacao: number;
    tipo_restaurante: string;
    tipo_retirada: string;
    distancia: string;
    descricao: string;
    usuario_id: number;
    usuario: UserEntity;
    pratos: PratoEntity[];
    data_criacao: Date;
    data_alteracao: Date;
    isActive: boolean;
}
