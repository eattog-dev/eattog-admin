import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

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
    cpf: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    numero_celular: string;

    @Column({ length: 20 })
    @IsNotEmpty()
    @IsString()
    senha: string;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;
}
