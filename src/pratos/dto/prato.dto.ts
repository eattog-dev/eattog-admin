import { IsString, IsNumber, IsArray, IsInt, IsBoolean } from 'class-validator';

export class PratoDto {
    @IsString()
    nome: string;

    @IsNumber()
    valor: number;

    @IsString()
    imagem: string;

    @IsArray()
    ingredientes: string[];

    @IsString()
    descricao: string;

    @IsInt()
    restaurante: number;

    @IsInt()
    categoria_prato: number;

    @IsBoolean()
    desconto: boolean;

    @IsNumber()
    valor_desconto: number;
}
