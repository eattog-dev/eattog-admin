import { EnderecoController } from './endereco.controller';
import { EnderecoService } from './endereco.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        EnderecoController,],
    providers: [
        EnderecoService,],
})
export class EnderecoModule { }
