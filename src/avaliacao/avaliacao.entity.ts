import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class AvaliacaoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pontuacao: number;

    @ManyToOne(() => RestauranteEntity, restaurante => restaurante.avaliacao)
    restaurante: RestauranteEntity;
}