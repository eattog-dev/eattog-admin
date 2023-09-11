import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
export declare class PratoEntity {
    id: number;
    nome: string;
    valor: number;
    imagem: string;
    restaurante: RestauranteEntity;
    ingredientes: string[];
}
