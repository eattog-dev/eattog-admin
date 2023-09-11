import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    nome: string;

    @Column({ length: 200 })
    email: string;

    @Column({ length: 14 })
    cpf: string;

    @Column()
    numero_celular: string;

    @Column({ length: 20 })
    senha: string;

    @Column({ default: true })
    isActive: boolean;
}