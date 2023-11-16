import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { CategoriaPratoEntity } from 'src/categoria-prato/categoria-prato.entity';
import { ItemEntity } from 'src/listaCompras/entities/item.entity';
export declare class PratoEntity {
    id: number;
    nome: string;
    valor: number;
    valorStripe: number;
    imagem: string;
    desconto: boolean;
    valor_desconto: number;
    restaurante: RestauranteEntity;
    prato_categoria: CategoriaPratoEntity;
    items: ItemEntity[];
    ingredientes: string[];
    tempo_preparo: number;
    descricao: string;
    data_criacao: Date;
    data_alteracao: Date;
}
