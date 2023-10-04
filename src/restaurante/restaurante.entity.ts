import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PratoEntity } from 'src/pratos/prato.entity';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Entity('restaurantes')
export class RestauranteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    imagem: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    logo: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    banner: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    titulo: string;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    @IsNotEmpty()
    @IsNumber()
    avaliacao: number;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    tipoRefeicao: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    distancia: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    localizacao: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty()
    @IsString()
    tipoRetirada: string;

    @Column({ type: 'text' })
    @IsNotEmpty()
    @IsString()
    descricao: string;

    @OneToMany(() => PratoEntity, (prato) => prato.restaurante)
    pratos: PratoEntity[];
}
