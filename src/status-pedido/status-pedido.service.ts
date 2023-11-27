import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusPedidoEntity } from './entities/status-pedido.entity';
import { DeleteResult, Repository } from 'typeorm';
import { StatusPedidoDTO } from './dto/status-pedido.dto';

@Injectable()
export class StatusPedidoService {
    constructor(
        @InjectRepository(StatusPedidoEntity)
        private statusPedidoRepository: Repository<StatusPedidoEntity>
    ) {
    }

    async todosStatusAtivos(): Promise<StatusPedidoEntity[]> {
        const statusAtivos = this.statusPedidoRepository.find({
            where: {
                isActive: true
            }
        });
        if (!statusAtivos) {
            throw new NotFoundException('Nenhum status de pedido encontrado')
        }
        return statusAtivos;
    }

    async todosStatusInativos(): Promise<StatusPedidoEntity[]> {
        const statusAtivos = this.statusPedidoRepository.find({
            where: {
                isActive: false
            }
        });
        if (!statusAtivos) {
            throw new NotFoundException('Não foi encontrado nenhum status de pedido inativo')
        }
        return statusAtivos;
    }

    async pegarStatusId(id: number): Promise<StatusPedidoEntity> {
        const status = await this.statusPedidoRepository.findOne({
            where: {
                id: id
            }
        });
        if (!status) {
            throw new NotFoundException('Não foi encontrado nenhum status de pedido')
        }
        return status;
    }

    async createStatusPedido(statusPedidoDTO: StatusPedidoDTO): Promise<StatusPedidoEntity> {
        return await this.statusPedidoRepository.save(statusPedidoDTO)
    }

    async deletarStatusId(id: number): Promise<DeleteResult> {
        const status = await this.statusPedidoRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!status) {
            throw new NotFoundException('Status não encontrado');
        }

        status.isActive = false;

        await this.statusPedidoRepository.save(status);

        return {
            raw: [],
            affected: 1,
        };
    }


}
