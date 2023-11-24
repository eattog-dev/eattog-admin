import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsString, IsNumber, IsArray, IsInt, IsIn, IsBoolean, IsNotEmpty } from 'class-validator';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { CategoriaPratoEntity } from 'src/categoria-prato/categoria-prato.entity';
import { ItemEntity } from 'src/listaCompras/entities/item.entity';
import { CarrinhoPratoEntity } from 'src/carrinho-produto/entities/carrinho-prato.entity';

@Entity('pratos')
export class PratoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @IsString()
    @IsNotEmpty({ message: 'O nome do prato não pode ser nulo.' })
    nome: string;

    @Column()
    @IsNumber()
    @IsNotEmpty({ message: 'O valor do prato não pode ser nulo.' })
    valor: number;

    @Column()
    @IsString()
    valorStripe: string;

    @Column({ nullable: false })
    @IsString()
    @IsNotEmpty({ message: 'A imagem não pode ser nula' })
    imagem: string;

    @Column({ nullable: false })
    @IsBoolean()
    desconto: boolean;

    @Column()
    @IsNumber()
    valor_desconto: number;

    @ManyToOne(() => RestauranteEntity, restaurante => restaurante.pratos)
    @IsInt()
    @IsNotEmpty({ message: 'O restaurante não pode ser nulo.' })
    restaurante: RestauranteEntity;

    @ManyToOne(() => CategoriaPratoEntity, (categoria_prato) => categoria_prato.categoria_prato) // specify inverse side as a second parameter
    @JoinColumn()
    @IsNotEmpty({ message: 'A categoria_prato não pode ser nula.' })
    prato_categoria: CategoriaPratoEntity;

    @Column('simple-array')
    @IsArray()
    @IsNotEmpty({ message: 'O prato não pode ter ingredientes nulos.' })
    ingredientes: string[];

    @Column()
    @IsNumber()
    @IsNotEmpty({ message: 'O tempo de preparo não pode ser nulo.' })
    tempo_preparo: number;

    @Column({ length: 255 })
    @IsString()
    @IsNotEmpty({ message: 'A descrição do prato não pode ser nula' })
    descricao: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;

    @OneToMany(() => ItemEntity, (item) => item.prato)
    items: ItemEntity[];

    @OneToMany(() => CarrinhoPratoEntity, carrinhoProduto => carrinhoProduto.prato)
    carrinhoPrato: CarrinhoPratoEntity[];
}
