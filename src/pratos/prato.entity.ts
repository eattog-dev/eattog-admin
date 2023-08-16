import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PratoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    nome: string;

    @Column()
    valor: number;

    @Column()
    ingredientes: string;
}