import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { IsBoolean, IsInt } from 'class-validator';
import { CarrinhoPratoEntity } from 'src/carrinho-produto/entities/carrinho-prato.entity';
import { PedidoEntity } from 'src/pedido/entities/pedido.entity';

@Entity('carrinho-compra')
export class CarrinhoCompraEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    @IsInt()
    usuario_id: number;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;

    @OneToMany(() => CarrinhoPratoEntity, carrinhoProduto => carrinhoProduto.carrinhoCompra)
    carrinhoProduto: CarrinhoPratoEntity[];

    @OneToMany(() => PedidoEntity, (pedido) => pedido.carrinho_compra)
    pedido: PedidoEntity;
}