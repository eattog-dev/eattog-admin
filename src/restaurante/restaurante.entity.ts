import { PratoEntity } from 'src/pratos/prato.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('restaurantes')
export class RestauranteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    imagem: string;

    @Column({ type: 'varchar', length: 255 })
    logo: string;

    @Column({ type: 'varchar', length: 255 })
    titulo: string;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    avaliacao: number;

    @Column({ type: 'varchar', length: 255 })
    tipoRefeicao: string;

    @Column({ type: 'varchar', length: 255 })
    distancia: string;

    @Column({ type: 'varchar', length: 255 })
    tipoRetirada: string;

    @Column({ type: 'text' })
    descricao: string;

    @OneToMany(() => PratoEntity, (prato) => prato.restaurante)
    pratos: PratoEntity[]
}
