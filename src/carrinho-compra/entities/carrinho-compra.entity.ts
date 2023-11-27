import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { CarrinhoPratoEntity } from 'src/carrinho-produto/entities/carrinho-prato.entity';

@Entity('carrinho-compra')
export class CarrinhoCompraEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    @IsInt()
    usuario_id: number;

    @Column({ nullable: false })
    @IsString()
    status: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;

    @OneToMany(() => CarrinhoPratoEntity, carrinhoProduto => carrinhoProduto.carrinhoCompra)
    carrinhoProduto: CarrinhoPratoEntity[];
}