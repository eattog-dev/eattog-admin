import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { IsString, IsNumber, IsArray, IsInt } from 'class-validator';
import { PratoEntity } from 'src/pratos/prato.entity';

@Entity('categoria_prato')
export class CategoriaPratoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @IsString()
    categoria: string;

    @OneToOne(() => PratoEntity, prato_categoria => prato_categoria.prato_categoria)
    @IsInt()
    categoria_prato: CategoriaPratoEntity;
}
