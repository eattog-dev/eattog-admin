import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { CategoriaPratoEntity } from 'src/categoria-prato/categoria-prato.entity';
export declare class PratoEntity {
    id: number;
    nome: string;
    valor: number;
    imagem: string;
    desconto: boolean;
    valor_desconto: number;
    restaurante: RestauranteEntity;
    prato_categoria: CategoriaPratoEntity;
    ingredientes: string[];
}
