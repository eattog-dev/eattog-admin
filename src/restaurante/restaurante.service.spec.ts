// restaurante.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { RestauranteService } from './restaurante.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestauranteEntity } from './entities/restaurante.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { RestauranteDTO } from './dto/restaurante.dto';

describe('RestauranteService', () => {
    let service: RestauranteService;
    let restauranteRepository: Repository<RestauranteEntity>;
    let usuarioRepository: Repository<UserEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RestauranteService,
                {
                    provide: getRepositoryToken(RestauranteEntity),
                    useClass: Repository,
                },
                {
                    provide: getRepositoryToken(UserEntity),
                    useClass: Repository,
                },
            ],
        }).compile();

        service = module.get<RestauranteService>(RestauranteService);
        restauranteRepository = module.get<Repository<RestauranteEntity>>(
            getRepositoryToken(RestauranteEntity),
        );
        usuarioRepository = module.get<Repository<UserEntity>>(
            getRepositoryToken(UserEntity),
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should get a list of restaurantes', async () => {
        const restaurantes: RestauranteEntity[] = [];
        jest
            .spyOn(restauranteRepository, 'find')
            .mockImplementation(async () => restaurantes);

        const result = await service.getRestaurantes();
        expect(result).toBe(restaurantes);
    });

    it('should create a restaurante', async () => {
        const restaurante = new RestauranteEntity();


        restaurante.imagem = 'aaaa';
        restaurante.banner = 'aaaaa';
        restaurante.logo = 'aaaa';
        restaurante.razao_social = 'bar do ze';
        restaurante.cnpj = '47.870.952/0001-20';
        restaurante.cep = '95052070';
        restaurante.rua = 'Rua Atílio Andreazza';
        restaurante.bairro = 'Sagrada Família';
        restaurante.numero_endereco = '26';
        restaurante.cidade = 'Caxias do Sul';
        restaurante.estado = 'RS';
        restaurante.avaliacao = 5;
        restaurante.numero_telefone = "(97) 99585-6626";
        restaurante.tipo_restaurante = 'sei la';
        restaurante.tipo_retirada = 'nao sei';
        restaurante.distancia = "3";
        restaurante.descricao = "super restaurante"

        const user = new UserEntity();

        user.nome = "Emanuel user normal",
            user.data_aniversario = new Date('2002-04-11'),
            user.email = "teste6@gmail.com",
            user.numero_celular = "67992927979",
            user.cpf = "04559174180",
            user.senha = "123456"

        jest
            .spyOn(usuarioRepository, 'findOne')
            .mockImplementation(async () => user);
        jest.spyOn(restauranteRepository, 'save').mockImplementation(() =>
            Promise.resolve(restaurante),
        );

        const result = await service.createRestaurante(
            new RestauranteDTO,
            restaurante.imagem,
            restaurante.banner,
            restaurante.logo,
            1
        );

        expect(result).toBeDefined();
        expect(result instanceof RestauranteEntity).toBe(true);
    });

    // Add more test cases for other methods as needed
});

