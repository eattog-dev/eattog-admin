import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RestauranteDTO {
    @IsString({ message: 'O campo "imagem" deve ser uma string' })
    @IsNotEmpty()
    imagem: string;

    @IsString({ message: 'O campo "logo" deve ser uma string' })
    @IsNotEmpty()
    logo: string;

    @IsString({ message: 'O campo "banner" deve ser uma string' })
    @IsNotEmpty()
    banner: string;

    @IsString({ message: 'O campo "razao_social" deve ser uma string' })
    @IsNotEmpty()
    razao_social: string;

    @IsString({ message: 'O campo "cnpj" deve ser uma string' })
    @IsNotEmpty()
    cnpj: string;

    @IsString({ message: 'O campo "cep" deve ser uma string' })
    @IsNotEmpty()
    cep: string;

    @IsString({ message: 'O campo "rua" deve ser uma string' })
    @IsNotEmpty()
    rua_bairro: string;

    @IsString({ message: 'O campo "cidade" deve ser uma string' })
    @IsNotEmpty()
    cidade: string;

    @IsNumber()
    avaliacao: number;

    @IsString({ message: 'O campo "tipoRestaurante" deve ser uma string' })
    @IsNotEmpty()
    tipo_restaurante: string;

    @IsString({ message: 'O campo "tipoRetirada" deve ser uma string' })
    @IsNotEmpty()
    tipo_retirada: string;

    @IsString({ message: 'O campo "distancia" deve ser uma string' })
    distancia: string;

    @IsString({ message: 'O campo "descricao" deve ser uma string' })
    @IsNotEmpty()
    descricao: string;
}