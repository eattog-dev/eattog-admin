import { IsInt, IsNumber, Max, Min } from 'class-validator';

export class AvaliacaoDto {
    @IsInt()
    @Min(1)
    @Max(5)
    pontuacao: number;
}
