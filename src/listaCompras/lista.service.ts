import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListaEntity } from './entities/lista.entity';
import { Repository } from 'typeorm';
import { ItemEntity } from './entities/item.entity';
import { PratoEntity } from 'src/pratos/entities/prato.entity';
import { ListaDto } from './dtos/lista.dto';
import { ItemDto } from './dtos/item.dto';

@Injectable()
export class ListaService {
    constructor(
        @InjectRepository(ListaEntity)
        private readonly listaRepository: Repository<ListaEntity>,
        @InjectRepository(ItemEntity)
        private readonly itemRepository: Repository<ItemEntity>,
        @InjectRepository(PratoEntity)
        private readonly produtoRepository: Repository<PratoEntity>
    ) { }

    detalhes(id: number): Promise<ListaEntity> {
        return this.listaRepository.findOneBy({ id: id });
    }

    listar(): Promise<ListaEntity[]> {
        return this.listaRepository.find({});
    }

    criar(listaDto: ListaDto): Promise<ListaEntity> {
        let lista = new ListaEntity();
        lista.estado = "pendente";

        return this.listaRepository.save(lista);
    }

    async completar(id: number): Promise<ListaEntity> {
        let lista = await this.listaRepository.findOneBy({ id: id });
        lista.estado = "completo";

        return this.listaRepository.save(lista);
    }

    async adicionarItem(id: number, itemDto: ItemDto): Promise<ListaEntity> {
        let lista = await this.listaRepository.findOneBy({ id: id });
        let prato = await this.produtoRepository.findOneBy({ id: itemDto.pratoId });
        if (!(lista && prato)) {
            throw new NotFoundException();
        }
        let item = new ItemEntity();
        item.quantidade = 1;
        // item.prato = prato;
        item.lista = lista;

        await this.itemRepository.save(item);
        return this.listaRepository.findOneBy({ id: id });
    }
}
