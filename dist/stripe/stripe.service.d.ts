import { ListaEntity } from 'src/listaCompras/entities/lista.entity';
import { PratoEntity } from 'src/pratos/prato.entity';
export declare class StripeService {
    private stripe;
    constructor();
    criarProduto(prato: PratoEntity): Promise<any>;
    criarSessaoCompra(lista: ListaEntity): Promise<any>;
}
