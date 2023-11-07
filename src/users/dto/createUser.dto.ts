import { IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    nome: string;

    @IsString()
    email: string;

    @IsString()
    numero_celular: string;

    @IsString()
    cpf: string;

    @IsString()
    senha: string;
}