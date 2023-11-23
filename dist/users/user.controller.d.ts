import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { ReturnUserDto } from './dto/returnUser.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    show(req: any): Promise<UserEntity>;
    getTodosUsuariosNormais(): Promise<UserEntity[]>;
    getUsuarioId(usuario_id: number): Promise<ReturnUserDto>;
    getTodosUsuariosAdmin(): Promise<UserEntity[]>;
    update(id: number, updateUser: UserDto): Promise<UserEntity>;
    createAdmin(createUser: CreateUserDto): Promise<UserEntity>;
    createUser(createUser: CreateUserDto): Promise<UserEntity>;
}
