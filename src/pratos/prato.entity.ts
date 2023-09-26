import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { IsString, IsNumber, IsArray, IsInt, IsIn, IsBoolean } from 'class-validator';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { CategoriaPratoEntity } from 'src/categoria-prato/categoria-prato.entity';

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

    @Column({ nullable: false })
    @IsBoolean()
    desconto: boolean;

    @Column()
    @IsNumber()
    valor_desconto: number;

    @ManyToOne(() => RestauranteEntity, restaurante => restaurante.pratos)
    @IsInt()
    restaurante: RestauranteEntity;

    @OneToOne(() => CategoriaPratoEntity, (categoria_prato) => categoria_prato.categoria_prato) // specify inverse side as a second parameter
    @JoinColumn()
    prato_categoria: CategoriaPratoEntity

    @Column('simple-array')
    @IsArray()
    ingredientes: string[];
}
