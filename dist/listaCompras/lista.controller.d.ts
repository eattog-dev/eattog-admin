import { ListaService } from './lista.service';
import { ListaEntity } from './entities/lista.entity';
import { ListaDto } from './dtos/lista.dto';
import { ItemDto } from './dtos/item.dto';
import { StripeService } from 'src/stripe/stripe.service';
export declare class ListaController {
    private readonly listaService;
    private readonly stripeService;
    constructor(listaService: ListaService, stripeService: StripeService);
    listar(): Promise<ListaEntity[]>;
    criar(listaDto: ListaDto): Promise<ListaEntity>;
    completar(id: number): Promise<ListaEntity>;
    checkout(id: number): Promise<any>;
    adicionar(id: number, itemDto: ItemDto): Promise<ListaEntity>;
}
