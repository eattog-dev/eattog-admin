import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { ReturnUserDto } from './dto/returnUser.dto';
import { ReturnRestauranteUserDto } from './dto/return-restaurante-usuario.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    getTodosUsuariosNormais(): Promise<UserEntity[]>;
    getUsuarioId(usuarioId: number): Promise<ReturnUserDto>;
    getUsuarioRestauranteId(usuarioId: number): Promise<ReturnRestauranteUserDto>;
    getTodosUsuariosAdmin(): Promise<UserEntity[]>;
    update(usuarioId: number, updateUser: UserDto): Promise<UserEntity>;
    createAdmin(createUser: CreateUserDto): Promise<UserEntity>;
    createUser(createUser: CreateUserDto): Promise<UserEntity>;
}
