import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PratoEntity } from 'src/pratos/prato.entity';
import { ListaEntity } from './lista.entity';
import { IsNotEmpty, IsNumber } from 'class-validator';

@Entity('item-carrinho')
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'A quantidade do item não pode estar vazia' })
  @IsNumber({}, { message: 'A quantidade do item deve ser um número' })
  quantidade: number;

  @ManyToOne(() => PratoEntity, (prato) => prato.items, {
    eager: true,
  })
  prato: PratoEntity;

  @ManyToOne(() => ListaEntity, (lista) => lista.items)
  lista: ListaEntity;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;
}
