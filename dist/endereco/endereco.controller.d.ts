import { CriarEnderecoDto } from './dto/criar_endereco.dto';
import { EnderecoService } from './endereco.service';
import { EnderecoEntity } from './endereco.entity';
export declare class EnderecoController {
    private readonly enderecoService;
    constructor(enderecoService: EnderecoService);
    createAddress(criarEnderecoDto: CriarEnderecoDto, usuarioId: number): Promise<EnderecoEntity>;
}
