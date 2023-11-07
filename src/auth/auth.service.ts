import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';
import { LoginDto } from './dtos/login.dto';
import { ReturnLogin } from './dtos/returnLogin.dto';
import { UserEntity } from 'src/users/user.entity';
import { validatePassword } from 'src/utils/password';
import { LoginPayload } from './dtos/loginPayload.dto';
import { ReturnUserDto } from 'src/users/dto/returnUser.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly usuarioService: UserService,
        private jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto): Promise<ReturnLogin> {
        const user: UserEntity | undefined = await this.usuarioService
            .findUserByEmail(loginDto.email)
            .catch(() => undefined);
        console.log(user);
        
        
        const isMatch = await validatePassword(
            loginDto.senha,
            user?.senha || '',
        );

        console.log('match', isMatch);
        

        if (!user || !isMatch) {
            throw new NotFoundException('Email or passord invalid');
        }

        return {
            accessToken: this.jwtService.sign({ ...new LoginPayload(user) }),
            user: new ReturnUserDto(user),
        };
    }
}
