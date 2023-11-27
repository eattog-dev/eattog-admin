import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, IsBoolean, Length, Matches, ValidateIf, IsPhoneNumber } from 'class-validator';
import { EnderecoEntity } from 'src/endereco/entities/endereco.entity';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';
import { PedidoEntity } from 'src/pedido/entities/pedido.entity';

@Entity('usuarios')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @IsNotEmpty()
    @IsString()
    nome: string;

    @Column({ length: 200, unique: true })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Column({ length: 14 })
    @IsNotEmpty()
    @IsString()
    @Matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/, {
        message: 'O CPF deve estar no formato 999.999.999-99'
    })
    cpf: string;

    @Column({ type: 'date' })
    data_aniversario: Date;

    @Column({ length: 15 })
    @IsNotEmpty()
    @IsString()
    @ValidateIf((obj) => obj.numero_celular !== null)
    @IsPhoneNumber(null, { message: 'Número de celular inválido' })
    numero_celular: string;

    @Column({ nullable: false })
    tipo_usuario: number;

    @OneToMany(() => EnderecoEntity, (address) => address.user)
    addresses?: EnderecoEntity[];

    @Column({ length: 255 })
    @IsNotEmpty()
    @IsString()
    senha: string;

    @OneToMany(() => RestauranteEntity, (rest) => rest.usuarios)
    restaurante?: RestauranteEntity[];

    @OneToMany(() => PedidoEntity, (pedido) => pedido.usuario)
    pedido: PedidoEntity;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;
}
