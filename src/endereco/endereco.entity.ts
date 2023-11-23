import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { IsString, IsBoolean } from 'class-validator';
import { UserEntity } from 'src/users/user.entity';

@Entity('endereco')
export class EnderecoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ length: 255, nullable: true })
    @IsString()
    cep: string;

    @Column({ length: 255, nullable: true })
    @IsString()
    estado: string;

    @Column({ length: 255, nullable: true })
    @IsString()
    municipio: string;

    @Column({ length: 255, nullable: true })
    @IsString()
    logradouro: string;

    @Column({ length: 255, nullable: true })
    @IsString()
    numero_residencia: string;

    @Column({ length: 255, nullable: true })
    @IsString()
    bairro: string;

    @Column({ length: 255, nullable: true })
    @IsString()
    complemento: string;

    @ManyToOne(() => UserEntity, (user) => user.addresses, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: UserEntity;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ default: true })
    @IsBoolean()
    isActive: boolean;
}
