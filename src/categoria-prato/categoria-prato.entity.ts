import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { IsString, IsNumber, IsArray, IsInt } from 'class-validator';
import { PratoEntity } from 'src/pratos/prato.entity';

@Entity('categoria_prato')
export class CategoriaPratoEntity {
    slice(arg0: number, arg1: number): CategoriaPratoEntity {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @IsString()
    categoria: string;

    @OneToMany(() => PratoEntity, prato_categoria => prato_categoria.prato_categoria, {
        eager: true
    })
    @IsInt()
    categoria_prato: [CategoriaPratoEntity];
}
