import { IsNumber, IsString } from 'class-validator';

export class RestauranteDTO {
    @IsString()
    imagem: string;

    @IsString()
    logo: string;

    @IsString()
    titulo: string;

    @IsNumber()
    avaliacao: number;

    @IsString()
    tipoRefeicao: string;

    @IsString()
    distancia: string;

    @IsString()
    tipoRetirada: string;

    @IsString()
    descricao: string;
}
