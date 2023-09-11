import { IsString, IsArray } from 'class-validator';

export class CategoriaDto {
    @IsString()
    nome: string;

    @IsArray()
    pratosId: number[]; // Um array de IDs de pratos relacionados

    @IsArray()
    restaurantesId: number[]; // Um array de IDs de restaurantes relacionados
}
