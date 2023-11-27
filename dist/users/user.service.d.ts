import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UserService {
    private usersRepository;
    private restauranteRepository;
    constructor(usersRepository: Repository<UserEntity>, restauranteRepository: Repository<RestauranteEntity>);
    criaUsuario(criaUsuario: CreateUserDto, tipoUsuario?: number): Promise<UserEntity>;
    update(id: number, updateDto: UpdateUserDto): Promise<UserEntity>;
    getAllNormalUsers(): Promise<UserEntity[]>;
    getAllAdminUsers(): Promise<UserEntity[]>;
    getUserByIdUsingRelations(usuarioId: number): Promise<UserEntity>;
    getUserByIdUsingRelationsRestaurante(usuarioId: number): Promise<UserEntity>;
    show(id: number): Promise<UserEntity>;
    findUserById(userId: number): Promise<UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
}
