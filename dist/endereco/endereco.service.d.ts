import { EnderecoEntity } from './endereco.entity';
import { Repository } from 'typeorm';
import { CriarEnderecoDto } from './dto/criar_endereco.dto';
import { UserService } from 'src/users/user.service';
export declare class EnderecoService {
    private readonly enderecoRepository;
    private readonly usuarioService;
    constructor(enderecoRepository: Repository<EnderecoEntity>, usuarioService: UserService);
    criarEndereco(criarEndereco: CriarEnderecoDto, userId: number): Promise<EnderecoEntity>;
}
