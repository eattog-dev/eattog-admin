import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { CarrinhoCompraEntity } from 'src/carrinho-compra/entities/carrinho-compra.entity';
import { PratoEntity } from 'src/pratos/prato.entity';

@Entity('carrinho-prato')
export class CarrinhoPratoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    @IsInt()
    carrinho_compra_id: number;

    @Column({ nullable: false })
    @IsInt()
    prato_id: number;

    @Column({ nullable: false })
    @IsInt()
    quantidade: number;

    @Column()
    @IsOptional()
    @IsString()
    descricao: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;

    @ManyToOne(() => CarrinhoCompraEntity, carrinhoCompra => carrinhoCompra.carrinhoProduto)
    @JoinColumn({ name: 'carrinho_compra_id', referencedColumnName: 'id' })
    carrinhoCompra: CarrinhoCompraEntity;

    @ManyToOne(() => PratoEntity, prato => prato.carrinhoPrato)
    @JoinColumn({ name: 'prato_id', referencedColumnName: 'id' })
    prato: PratoEntity;
}
