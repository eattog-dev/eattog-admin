import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    criaUsuario(criaUsuario: CreateUserDto, tipoUsuario?: number): Promise<UserEntity>;
    update(id: number, userDto: UserDto): Promise<UserEntity>;
    getAllNormalUsers(): Promise<UserEntity[]>;
    getAllAdminUsers(): Promise<UserEntity[]>;
    show(id: number): Promise<UserEntity>;
    findUserById(userId: number): Promise<UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
}
