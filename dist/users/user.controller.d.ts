import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { SessionDto } from './dto/session.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    show(req: any): Promise<UserEntity>;
    update(id: number, updateUser: UserDto): Promise<UserEntity>;
    create(createUser: UserDto): Promise<UserEntity>;
    login(signInUser: UserDto): Promise<SessionDto>;
}
