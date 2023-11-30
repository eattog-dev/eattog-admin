import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsString, IsNumber, IsArray, IsInt, IsNotEmpty } from 'class-validator';
import { PratoEntity } from 'src/pratos/entities/prato.entity';

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
    @IsNotEmpty({ message: 'A categoria_prato não pode ser nula.' })
    categoria_prato: PratoEntity[];

    @CreateDateColumn()
    data_criacao: Date;
  
    @UpdateDateColumn()
    data_alteracao: Date;

    @OneToMany(() => PratoEntity, prato => prato.prato_categoria)
    pratos: PratoEntity[];
}
