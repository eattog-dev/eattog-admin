import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    show(req: any): Promise<UserEntity>;
    getTodosUsuariosNormais(): Promise<UserEntity[]>;
    getTodosUsuariosAdmin(): Promise<UserEntity[]>;
    update(id: number, updateUser: UserDto): Promise<UserEntity>;
    createAdmin(createUser: CreateUserDto): Promise<UserEntity>;
    createUser(createUser: CreateUserDto): Promise<UserEntity>;
}
