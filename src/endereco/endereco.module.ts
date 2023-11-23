import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecoController } from './endereco.controller';
import { EnderecoService } from './endereco.service';
import { Module } from '@nestjs/common';
import { EnderecoEntity } from './endereco.entity';
import { UserModule } from 'src/users/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([EnderecoEntity]), UserModule],
    controllers: [
        EnderecoController,],
    providers: [
        EnderecoService,],
})
export class EnderecoModule { }
