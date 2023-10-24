import { ListaService } from './lista.service';
import { ListaEntity } from './entities/lista.entity';
import { ListaDto } from './dtos/lista.dto';
import { ItemDto } from './dtos/item.dto';
export declare class ListaController {
    private readonly listaService;
    constructor(listaService: ListaService);
    listar(): Promise<ListaEntity[]>;
    criar(listaDto: ListaDto): Promise<ListaEntity>;
    completar(id: number): Promise<ListaEntity>;
    adicionar(id: number, itemDto: ItemDto): Promise<ListaEntity>;
}
