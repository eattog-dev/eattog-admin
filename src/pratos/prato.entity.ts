import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsString, IsNumber, IsArray, IsInt } from 'class-validator';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';

@Entity('pratos')
export class PratoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @IsString()
    nome: string;

    @Column()
    @IsNumber()
    valor: number;

    @Column({ nullable: false })
    @IsString()
    imagem: string;

    @ManyToOne(() => RestauranteEntity, restaurante => restaurante.pratos)
    @IsInt()
    restaurante: RestauranteEntity;

    @Column('simple-array')
    @IsArray()
    ingredientes: string[];
}
