import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, IsBoolean, Length, Matches, ValidateIf, IsPhoneNumber } from 'class-validator';

@Entity('usuarios')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @IsNotEmpty()
    @IsString()
    nome: string;

    @Column({ length: 200, unique: true })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Column({ length: 14 })
    @IsNotEmpty()
    @IsString()
    @Matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/, {
        message: 'O CPF deve estar no formato 999.999.999-99'
    })
    cpf: string;

    @Column({ type: 'date' })
    data_aniversario: Date;

    @Column({ length: 14 })
    @IsNotEmpty()
    @IsString()
    @ValidateIf((obj) => obj.numero_celular !== null)
    @IsPhoneNumber(null, { message: 'Número de celular inválido' })
    numero_celular: string;

    @Column({ length: 255 })
    @IsNotEmpty()
    @IsString()
    cep: string;

    @Column({ length: 255 })
    @IsNotEmpty()
    @IsString()
    rua: string;

    @Column({ length: 255 })
    @IsNotEmpty()
    @IsString()
    complemento: string;

    @Column({ length: 255 })
    @IsNotEmpty()
    @IsString()
    bairro: string;

    @Column({ length: 255 })
    @IsNotEmpty()
    @IsString()
    numero_residencia: string;

    @Column({ length: 20 })
    @IsNotEmpty()
    @IsString()
    @Length(6, 20, { message: 'A senha deve ter entre 6 e 20 caracteres' })
    senha: string;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;
}
