import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { PedidoEntity } from "src/pedido/entities/pedido.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('status-pedido')
export class StatusPedidoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    status: string;

    @OneToOne(() => PedidoEntity, (pedido) => pedido.status)
    pedido: PedidoEntity;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;
}