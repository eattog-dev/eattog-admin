import { IsString, IsNumber, IsArray, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class CriarEnderecoDto {
    @IsString({ message: 'O campo "cep" deve ser uma string' })
    cep: string;

    @IsString({ message: 'O campo "estado" deve ser uma string' })
    estado: string;

    @IsString({ message: 'O campo "municipio" deve ser uma string' })
    municipio: string;

    @IsString({ message: 'O campo "logradouro" deve ser uma string' })
    logradouro: string;

    @IsString({ message: 'O campo "numero_residencia" deve ser uma string' })
    numero_residencia: string;

    @IsString({ message: 'O campo "bairro" deve ser uma string' })
    bairro: string;

    @IsString({ message: 'O campo "complemento" deve ser uma string' })
    @IsOptional()
    complemento: string;

}
