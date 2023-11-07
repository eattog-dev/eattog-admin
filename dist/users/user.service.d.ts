import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UserService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<UserEntity>, jwtService: JwtService);
    criaUsuario(criaUsuario: CreateUserDto, tipoUsuario?: number): Promise<UserEntity>;
    update(id: number, userDto: UserDto): Promise<UserEntity>;
    show(id: number): Promise<UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
}
