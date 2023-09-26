import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { SessionDto } from './dto/session.dto';
export declare class UserService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<UserEntity>, jwtService: JwtService);
    signIn(userDto: UserDto): Promise<SessionDto>;
    signUp(userDto: UserDto): Promise<UserEntity>;
    update(id: number, userDto: UserDto): Promise<UserEntity>;
    show(id: number): Promise<UserEntity>;
}
