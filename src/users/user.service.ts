import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/createUser.dto';
import { createPasswordHashed } from 'src/utils/password';
import { UserType } from './enum/user-type.enum';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) { }

    async criaUsuario(criaUsuario: CreateUserDto, tipoUsuario?: number): Promise<UserEntity> {
        const user = await this.findUserByEmail(criaUsuario.email).catch(
            () => undefined,
        );

        if (user) {
            throw new BadGatewayException('email registered in system');
        }
        const passwordHashed = await createPasswordHashed(criaUsuario.senha);

        return this.usersRepository.save({
            ...criaUsuario,
            tipo_usuario: tipoUsuario ? tipoUsuario : UserType.User,
            senha: passwordHashed,
        });

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
        if (userDto.senha) {
            const passwordHashed = await createPasswordHashed(userDto.senha);
            user.senha = passwordHashed;
        }

        return this.usersRepository.save(user);
    }

    async getAllNormalUsers(): Promise<UserEntity[]> {
        const normalUsers = await this.usersRepository.find({
            where: { tipo_usuario: UserType.User },
        });

        if (!normalUsers || normalUsers.length === 0) {
            throw new NotFoundException('Não foram encontrados usuários normais.');
        }

        return normalUsers;
    }

    async getAllAdminUsers(): Promise<UserEntity[]> {
        const adminUsers = await this.usersRepository.find({
            where: { tipo_usuario: UserType.Admin },
        });

        if (!adminUsers || adminUsers.length === 0) {
            throw new NotFoundException('Não foram encontrados usuários administradores.');
        }

        return adminUsers;
    }


    show(id: number): Promise<UserEntity> {
        return this.usersRepository.findOneBy({ id: id });
    }

    async findUserById(userId: number): Promise<UserEntity> {
        const user = await this.usersRepository.findOne({
            where: {
                id: userId,
            },
        });

        if (!user) {
            throw new NotFoundException(`UserId: ${userId} Not Found`);
        }

        return user;
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        const user = await this.usersRepository.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            throw new NotFoundException(`Email: ${email} Not Found`);
        }

        return user;
    }

}
