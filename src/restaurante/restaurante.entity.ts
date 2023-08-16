import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestauranteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    imagem: string;

    @Column({ length: 155 })
    nome: string;

    @Column()
    avaliacao: number;

    @Column()
    categoria: string;

    @Column()
    distancia: number;

    @Column()
    delivery: string;
}