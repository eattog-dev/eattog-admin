import { IsString } from 'class-validator';

export class CategoriaPratoDto {
    @IsString()
    categoria_prato: string;
}
