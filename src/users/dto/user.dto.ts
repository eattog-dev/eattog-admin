import { IsString, IsEmail, Matches, IsDate } from 'class-validator';

export class UserDto {
    @IsString({ message: 'O campo "nome" deve ser uma string' })
    nome: string;

    @IsEmail({}, { message: 'O campo "email" deve ser um endereço de e-mail válido' })
    email: string;

    @IsString({ message: 'O campo "cpf" deve ser uma string' })
    cpf: string;

    @IsDate({ message: 'O campo "data_aniversario" deve ser uma data válida' })
    data_aniversario: Date;

    @IsString({ message: 'O campo "numero_celular" deve ser uma string' })
    numero_celular: string;

    @IsString()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, { message: 'A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.' })
    senha: string;
}
