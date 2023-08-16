import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>
    ) { }

    getUsers(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    createUser(user: UserDto): Promise<UserEntity> {
        const novoUser = new UserEntity()
        novoUser.nome = user.nome;
        novoUser.email = user.email;
        novoUser.cpf = user.cpf;
        novoUser.numero_celular = user.numero_celular;
        novoUser.senha = user.senha;

        return this.usersRepository.save(novoUser);
    }

    getUser(id: number): Promise<UserEntity> {
        return this.usersRepository.findOneBy({ id: id });
    }

    async editUser(id: number, user: UserDto): Promise<UserEntity> {
        const atualizarUser = await this.usersRepository.findOneBy({ id: id });
        atualizarUser.nome = user.nome;
        atualizarUser.email = user.email;
        atualizarUser.cpf = user.cpf;
        atualizarUser.numero_celular = user.numero_celular;
        atualizarUser.senha = user.senha;

        return this.usersRepository.save(atualizarUser);
    }

    deleteUser(id: number): Promise<DeleteResult> {
        return this.usersRepository.delete(id);
    }
}
