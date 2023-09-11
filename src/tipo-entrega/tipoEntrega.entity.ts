import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class TipoEntregaEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome: string;
  
    // @OneToMany(() => RestauranteEntity, restaurante => restaurante.tipoEntrega)
    // restaurantes: RestauranteEntity[];
}