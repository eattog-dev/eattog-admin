import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PratoEntity } from 'src/pratos/prato.entity';
import { IsNotEmpty, IsString, IsNumber, MaxLength } from 'class-validator';

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

    @Column({ type: 'varchar' })
    @IsNotEmpty({ message: 'O campo banner não pode estar vazio' })
    @IsString({ message: 'O campo banner deve ser uma string' })
    banner: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'A razão social não pode estar vazio' })
    @IsString({ message: 'A razão social deve ser uma string' })
    razao_social: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'A razão social não pode estar vazia' })
    @IsString({ message: 'A razão social deve ser uma string' })
    @MaxLength(255, { message: 'A razão social não pode ter mais de 255 caracteres' })
    cnpj: string;

    @Column({ type: 'varchar', length: 8 })
    @IsNotEmpty({ message: 'O cep não pode estar vazio' })
    @IsString({ message: 'O cep deve ser uma string' })
    cep: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'A rua não pode estar vazio' })
    @IsString({ message: 'A rua deve ser uma string' })
    rua: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'O bairro não pode estar vazio' })
    @IsString({ message: 'O bairro deve ser uma string' })
    bairro: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'A cidade não pode estar vazio' })
    @IsString({ message: 'A cidade deve ser uma string' })
    cidade: string;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    @IsNotEmpty({ message: 'A avaliação não pode estar vazia' })
    @IsNumber({}, { message: 'A avaliação deve ser um número' })
    avaliacao: number;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'O tipo de refeição não pode estar vazio' })
    @IsString({ message: 'O tipo de refeição deve ser uma string' })
    tipo_restaurante: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'O tipo de retirada não pode estar vazio' })
    @IsString({ message: 'O tipo de retirada deve ser uma string' })
    tipo_retirada: string;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'A distância não pode estar vazia' })
    @IsString({ message: 'A distância deve ser uma string' })
    distancia: string;

    @Column({ type: 'text' })
    @IsNotEmpty({ message: 'A descrição não pode estar vazia' })
    @IsString({ message: 'A descrição deve ser uma string' })
    descricao: string;

    @OneToMany(() => PratoEntity, (prato) => prato.restaurante)
    pratos: PratoEntity[];

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;
}
