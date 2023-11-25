import { ListaEntity } from './entities/lista.entity';
import { Repository } from 'typeorm';
import { ItemEntity } from './entities/item.entity';
import { PratoEntity } from 'src/pratos/entities/prato.entity';
import { ListaDto } from './dtos/lista.dto';
import { ItemDto } from './dtos/item.dto';
export declare class ListaService {
    private readonly listaRepository;
    private readonly itemRepository;
    private readonly produtoRepository;
    constructor(listaRepository: Repository<ListaEntity>, itemRepository: Repository<ItemEntity>, produtoRepository: Repository<PratoEntity>);
    detalhes(id: number): Promise<ListaEntity>;
    listar(): Promise<ListaEntity[]>;
    criar(listaDto: ListaDto): Promise<ListaEntity>;
    completar(id: number): Promise<ListaEntity>;
    adicionarItem(id: number, itemDto: ItemDto): Promise<ListaEntity>;
}
