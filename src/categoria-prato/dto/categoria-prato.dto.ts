import { IsString } from 'class-validator';

export class CategoriaPratoDto {
    @IsString({ message: 'A propriedade "categoria_prato" deve ser uma string' })
    categoria_prato: string;
}
