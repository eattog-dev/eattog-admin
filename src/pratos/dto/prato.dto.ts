import { IsString, IsNumber, IsArray, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class PratoDto {
    @IsString({ message: 'O campo "nome" deve ser uma string' })
    nome: string;

    @IsNumber({}, { message: 'O campo "valor" deve ser um número' })
    valor: number;

    @IsString({ message: 'O campo "imagem" deve ser uma string' })
    imagem: string;

    @IsArray({ message: 'O campo "ingredientes" deve ser uma matriz de strings' })
    ingredientes: string[];

    @IsNumber()
    tempo_preparo: number;

    @IsString({ message: 'O campo "descricao" deve ser uma string' })
    descricao: string;

    @IsInt({ message: 'O campo "restaurante" deve ser um número inteiro' })
    restaurante_id: number;

    @IsInt({ message: 'O campo "categoria_prato" deve ser um número inteiro' })
    categoria_prato: number;

    @IsBoolean({ message: 'O campo "desconto" deve ser um valor booleano' })
    desconto: boolean;

    @IsOptional()
    @IsNumber()
    valor_desconto?: number;
}
