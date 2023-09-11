import { IsString, IsNumber, IsArray, IsInt } from 'class-validator';

export class PratoDto {
    @IsString()
    nome: string;

    @IsNumber()
    valor: number;

    @IsString()
    imagem: string;

    @IsArray()
    ingredientes: string[];

    @IsInt()
    restaurante: number;
}
