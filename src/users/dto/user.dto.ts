import { IsString, IsEmail, Matches, IsDate } from 'class-validator';

export class UserDto {
    @IsString()
    nome: string;

    @IsEmail()
    email: string;

    @IsString()
    cpf: string;

    @IsDate()
    data_aniversario: Date;

    @IsString()
    cep: string;

    @IsString()
    rua: string;

    @IsString()
    complemento: string;

    @IsString()
    bairro: string;

    @IsString()
    numero_residencia: string;

    @IsString()
    numero_celular: string;

    @IsString()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, { message: 'A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.' })
    senha: string;
}
