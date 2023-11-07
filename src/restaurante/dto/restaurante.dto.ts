import { IsNumber, IsString } from 'class-validator';

export class RestauranteDTO {
    @IsString({ message: 'O campo "imagem" deve ser uma string' })
    imagem: string;

    @IsString({ message: 'O campo "logo" deve ser uma string' })
    logo: string;

    @IsString({ message: 'O campo "banner" deve ser uma string' })
    banner: string;

    @IsString({ message: 'O campo "razao_social" deve ser uma string' })
    razao_social: string;

    @IsString({ message: 'O campo "cnpj" deve ser uma string' })
    cnpj: string;

    @IsString({ message: 'O campo "cep" deve ser uma string' })
    cep: string;

    @IsString({ message: 'O campo "rua" deve ser uma string' })
    rua: string;

    @IsString({ message: 'O campo "bairro" deve ser uma string' })
    bairro: string;

    @IsString({ message: 'O campo "cidade" deve ser uma string' })
    cidade: string;

    @IsNumber()
    avaliacao: number;

    @IsString({ message: 'O campo "tipoRestaurante" deve ser uma string' })
    tipo_restaurante: string;

    @IsString({ message: 'O campo "tipoRetirada" deve ser uma string' })
    tipo_retirada: string;

    @IsString({ message: 'O campo "distancia" deve ser uma string' })
    distancia: string;

    @IsString({ message: 'O campo "descricao" deve ser uma string' })
    descricao: string;
}