import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsDate({ message: 'O campo "data_aniversario" deve ser uma data válida' })
    @IsNotEmpty()
    data_aniversario: Date;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    numero_celular: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsString()
    @IsNotEmpty()
    senha: string;
}