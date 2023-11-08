import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
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
    @IsString()
    cep: string;

    @Column({ length: 255 })
    @IsString()
    rua: string;

    @Column({ length: 255 })
    @IsString()
    complemento: string;

    @Column({ length: 255 })
    @IsString()
    bairro: string;

    @Column({ length: 255 })
    @IsString()
    numero_residencia: string;

    @Column({ nullable: false })
    tipo_usuario: number;

    @Column({ length: 255 })
    @IsNotEmpty()
    @IsString()
    senha: string;

    @CreateDateColumn()
    data_criacao: Date;
  
    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;
}
