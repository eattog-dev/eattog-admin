import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PratoEntity } from 'src/pratos/prato.entity';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Entity('restaurantes')
export class RestauranteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'A imagem não pode estar vazia' })
    @IsString({ message: 'A imagem deve ser uma string' })
    imagem: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'O campo logo não pode estar vazio' })
    @IsString({ message: 'O campo logo deve ser uma string' })
    logo: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'O campo banner não pode estar vazio' })
    @IsString({ message: 'O campo banner deve ser uma string' })
    banner: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'O título não pode estar vazio' })
    @IsString({ message: 'O título deve ser uma string' })
    titulo: string;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    @IsNotEmpty({ message: 'A avaliação não pode estar vazia' })
    @IsNumber({}, { message: 'A avaliação deve ser um número' })
    avaliacao: number;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'O tipo de refeição não pode estar vazio' })
    @IsString({ message: 'O tipo de refeição deve ser uma string' })
    tipoRefeicao: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'A distância não pode estar vazia' })
    @IsString({ message: 'A distância deve ser uma string' })
    distancia: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'A localização não pode estar vazia' })
    @IsString({ message: 'A localização deve ser uma string' })
    localizacao: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'O tipo de retirada não pode estar vazio' })
    @IsString({ message: 'O tipo de retirada deve ser uma string' })
    tipoRetirada: string;

    @Column({ type: 'text' })
    @IsNotEmpty({ message: 'A descrição não pode estar vazia' })
    @IsString({ message: 'A descrição deve ser uma string' })
    descricao: string;

    @OneToMany(() => PratoEntity, (prato) => prato.restaurante)
    pratos: PratoEntity[];
}
