import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';
import { LoginDto } from './dtos/login.dto';
import { ReturnLogin } from './dtos/returnLogin.dto';
export declare class AuthService {
    private readonly usuarioService;
    private jwtService;
    constructor(usuarioService: UserService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<ReturnLogin>;
}
