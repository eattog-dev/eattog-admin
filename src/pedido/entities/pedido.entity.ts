import { IsBoolean, IsInt } from "class-validator";
import { CarrinhoCompraEntity } from "src/carrinho-compra/entities/carrinho-compra.entity";
import { StatusPedidoEntity } from "src/status-pedido/entities/status-pedido.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('pedido')
export class PedidoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    @IsInt()
    usuario_id: number;

    @ManyToOne(() => UserEntity, (user) => user.pedido)
    @JoinColumn({ name: 'usuario_id', referencedColumnName: 'id' })
    usuario: UserEntity;

    @Column({ nullable: false })
    @IsInt()
    carrinho_compra_id: number;

    @ManyToOne(() => CarrinhoCompraEntity, (carrinho_compra) => carrinho_compra.pedido)
    @JoinColumn({ name: 'carrinho_compra_id', referencedColumnName: 'id' })
    carrinho_compra: CarrinhoCompraEntity

    @Column({ nullable: false })
    @IsInt()
    status_id: number;

    @ManyToOne(() => StatusPedidoEntity, (status) => status.pedido)
    @JoinColumn({ name: 'status_id', referencedColumnName: 'id' })
    status: StatusPedidoEntity

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;
}