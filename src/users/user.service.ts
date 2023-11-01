import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SessionDto } from './dto/session.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ) { }

    async signIn(userDto: UserDto): Promise<SessionDto> {
        const user = await this.usersRepository.findOneBy({
            email: userDto.email,
            senha: userDto.senha
        });

        if (!user) {
            throw new UnauthorizedException();
        }
        const payload = { id: user.id, email: user.email };
        return new SessionDto(await this.jwtService.signAsync(payload));
    }

    signUp(userDto: UserDto): Promise<UserEntity> {
        let user = new UserEntity();
        user.nome = userDto.nome;
        user.email = userDto.email;
        user.cpf = userDto.cpf;
        user.data_aniversario = userDto.data_aniversario;
        user.cep = userDto.cep;
        user.rua = userDto.rua;
        user.complemento = userDto.complemento;
        user.bairro = userDto.bairro;
        user.numero_residencia = userDto.numero_residencia;
        user.numero_celular = userDto.numero_celular;
        user.senha = userDto.senha;

        return this.usersRepository.save(user);
    }

    async update(id: number, userDto: UserDto): Promise<UserEntity> {
        let user = await this.usersRepository.findOneBy({ id: id });
        user.nome = userDto.nome;
        user.email = userDto.email;
        user.cpf = userDto.cpf;
        user.data_aniversario = userDto.data_aniversario;
        user.cep = userDto.cep;
        user.rua = userDto.rua;
        user.complemento = userDto.complemento;
        user.bairro = userDto.bairro;
        user.numero_residencia = userDto.numero_residencia;
        user.numero_celular = userDto.numero_celular;
        user.senha = userDto.senha;

        return this.usersRepository.save(user);
    }

    show(id: number): Promise<UserEntity> {
        return this.usersRepository.findOneBy({ id: id });
    }
}
