import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { IsString, IsNumber, IsArray, IsInt, IsIn, IsBoolean } from 'class-validator';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { CategoriaPratoEntity } from 'src/categoria-prato/categoria-prato.entity';
import { ItemEntity } from 'src/listaCompras/entities/item.entity';

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

    @ManyToOne(() => CategoriaPratoEntity, (categoria_prato) => categoria_prato.categoria_prato) // specify inverse side as a second parameter
    @JoinColumn()
    prato_categoria: CategoriaPratoEntity

    @OneToMany(() => ItemEntity, (item) => item.prato)
    items: ItemEntity[]

    @Column('simple-array')
    @IsArray()
    ingredientes: string[];

    @Column({ length: 255 })
    @IsString()
    descricao: string;
}
