import { PratoEntity } from 'src/pratos/prato.entity';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class CategoriaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    // @OneToMany(() => PratoEntity, prato => prato.categoria)
    // pratos: PratoEntity[];

    // @OneToMany(() => RestauranteEntity, restaurante => restaurante.categoria)
    // restaurantes: RestauranteEntity[];
}