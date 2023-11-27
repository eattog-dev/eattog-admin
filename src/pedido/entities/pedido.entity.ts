import { IsBoolean, IsNotEmpty } from "class-validator";
import { CarrinhoCompraEntity } from "src/carrinho-compra/entities/carrinho-compra.entity";
import { StatusPedidoEntity } from "src/status-pedido/entities/status-pedido.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('pedido')
export class PedidoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, (user) => user.pedido)
    @JoinColumn()
    usuario: UserEntity

    @OneToOne(() => CarrinhoCompraEntity, (carrinho_compra) => carrinho_compra.pedido)
    @JoinColumn()
    carrinho_compra: CarrinhoCompraEntity

    @OneToOne(() => StatusPedidoEntity, (status) => status.pedido)
    @JoinColumn()
    status: StatusPedidoEntity

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;
}