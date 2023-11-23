import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnderecoEntity } from './endereco.entity';
import { Repository } from 'typeorm';
import { CriarEnderecoDto } from './dto/criar_endereco.dto';
import { UserService } from 'src/users/user.service';

@Injectable()
export class EnderecoService {
    constructor(
        @InjectRepository(EnderecoEntity)
        private readonly enderecoRepository: Repository<EnderecoEntity>,
        private readonly usuarioService: UserService,
    ) {
    };

    async criarEndereco(criarEndereco: CriarEnderecoDto, userId: number
    ): Promise<EnderecoEntity> {
        await this.usuarioService.findUserById(userId);

        return this.enderecoRepository.save({
            ...criarEndereco,
            userId,
        });
    }
}
