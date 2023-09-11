import { UserEntity } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    getUsers(): Promise<UserEntity[]>;
    createUser(user: UserDto): Promise<UserEntity>;
    getUser(id: number): Promise<UserEntity>;
    editUser(id: number, user: UserDto): Promise<UserEntity>;
    deleteUser(id: number): Promise<DeleteResult>;
    findByEmail(email: string): Promise<UserEntity>;
}
