import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { DeleteResult } from 'typeorm';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<UserEntity[]>;
    createUser(user: UserDto): Promise<UserEntity>;
    getUser(id: number): Promise<UserEntity>;
    editUser(id: number, user: UserDto): Promise<UserEntity>;
    deleteUser(id: number): Promise<DeleteResult>;
}
