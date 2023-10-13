import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
import { ItemEntity } from './item.entity';
import { IsNotEmpty, IsString, IsIn, ValidateNested } from 'class-validator';

@Entity('lista-carrinho')
export class ListaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty({ message: 'O nome da lista não pode estar vazio' })
    @IsString({ message: 'O nome da lista deve ser uma string' })
    nome: string;

    @Column()
    @IsNotEmpty({ message: 'O estado da lista não pode estar vazio' })
    @IsString({ message: 'O estado da lista deve ser uma string' })
    estado: string;

    @OneToMany(() => ItemEntity, (item) => item.lista, {
        eager: true,
    })
    items: ItemEntity[];
}
