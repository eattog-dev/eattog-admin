import { IsString, IsNumber, IsArray, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class EnderecoDto {
    @IsString({ message: 'O campo "cep" deve ser uma string' })
    cep: string;

    @IsString({ message: 'O campo "rua" deve ser uma string' })
    rua: string;

    @IsString({ message: 'O campo "complemento" deve ser uma string' })
    complemento: string;

    @IsString({ message: 'O campo "bairro" deve ser uma string' })
    bairro: string;

    @IsString({ message: 'O campo "numero_residencia" deve ser uma string' })
    numero_residencia: string;

    @IsInt({ message: 'O campo "usuario_id" deve ser um número inteiro' })
    usuario_id: number;

}
