import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { FindOptionsRelations, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { createPasswordHashed } from 'src/utils/password';
import { UserType } from './enum/user-type.enum';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        @InjectRepository(RestauranteEntity)
        private restauranteRepository: Repository<RestauranteEntity>,
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

    async update(id: number, updateDto: UpdateUserDto): Promise<UserEntity> {
        let user = await this.usersRepository.findOneBy({ id: id });
        user.nome = updateDto.nome;
        user.numero_celular = updateDto.numero_celular;
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

    async getUserByIdUsingRelations(usuarioId: number): Promise<UserEntity> {
        return this.usersRepository.findOne({
            where: {
                id: usuarioId,
            },
            relations: ['addresses'],
        });
    }

    async getUserByIdUsingRelationsRestaurante(usuarioId: number): Promise<UserEntity> {
        return this.usersRepository.findOne({
            where: {
                id: usuarioId,
            },
            relations: ['restaurante'],
        });
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


