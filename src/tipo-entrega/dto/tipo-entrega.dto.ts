import { IsString } from 'class-validator';

export class TipoEntregaDto {
    @IsString()
    nome: string;
}
