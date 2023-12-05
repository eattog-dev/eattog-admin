import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UserType } from './enum/user-type.enum';
import { BadGatewayException, NotFoundException } from '@nestjs/common';
import { createPasswordHashed } from 'src/utils/password';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as passwordUtils from 'src/utils/password';  // Importa o módulo com a função createPasswordHashed


describe('UserService', () => {
  let service: UserService;
  let usersRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    usersRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto = new CreateUserDto();
     
    createUserDto.nome = 'John Doe';
    createUserDto.email = 'john@example.com';
    createUserDto.senha = 'password123';
    createUserDto.numero_celular = '123456789';

    const passwordHashed = 'hashedPassword'; // Replace with actual hash

    jest
      .spyOn(service, 'findUserByEmail')
      .mockImplementation(async () => undefined);

    jest
    .spyOn(passwordUtils, 'createPasswordHashed')  // Espiona o método createPasswordHashed do módulo passwordUtils
    .mockImplementation(async () => passwordHashed); 
    
    jest.spyOn(usersRepository, 'save').mockImplementation(async () => {
      return { ...createUserDto, senha: passwordHashed, tipo_usuario: UserType.User } as UserEntity;
    });

    const result = await service.criaUsuario(createUserDto);

    expect(result).toBeDefined();
    expect(result instanceof UserEntity).toBe(true);
    expect(result.nome).toBe(createUserDto.nome);
    expect(result.email).toBe(createUserDto.email);
    expect(result.tipo_usuario).toBe(UserType.User);
    // Add more assertions as needed
  });

  it('should throw a BadGatewayException when trying to create a user with an existing email', async () => {
    const createUserDto = new CreateUserDto();
     
      createUserDto.nome = 'John Doe';
      createUserDto.email = 'john@example.com';
      createUserDto.senha = 'password123';
      createUserDto.numero_celular = '123456789';
    

    jest
      .spyOn(service, 'findUserByEmail')
      .mockImplementation(async () => {
        return { ...createUserDto } as UserEntity;
      });

    await expect(service.criaUsuario(createUserDto)).rejects.toThrowError(
      BadGatewayException,
    );
  });

  it('should update a user', async () => {
    const userId = 1;
    const updateUserDto = {
      nome: 'Updated Name',
      numero_celular: '987654321',
    };

    const user = new UserEntity();

      user.id = userId,
      user.nome = 'John Doe',
      user.email = 'john@example.com',
      user.senha = 'hashedPassword',
      user.numero_celular = '123456789',
      user.tipo_usuario = UserType.User,


    jest.spyOn(usersRepository, 'findOneBy').mockImplementation(async () => user);
    jest.spyOn(usersRepository, 'save').mockImplementation(async () => user);

    const result = await service.update(userId, updateUserDto);

    expect(result).toBeDefined();
    expect(result.id).toBe(userId);
    expect(result.nome).toBe(updateUserDto.nome);
    expect(result.numero_celular).toBe(updateUserDto.numero_celular);
    // Add more assertions as needed
  });

  it('should throw a NotFoundException when updating a non-existing user', async () => {
    const userId = 1;
    const updateUserDto = {
      nome: 'Updated Name',
      numero_celular: '987654321',
    };

    jest.spyOn(usersRepository, 'findOneBy').mockImplementation(async () => undefined);

    await expect(service.update(userId, updateUserDto)).rejects.toThrowError(
      NotFoundException,
    );
  });

  // Add more test cases for other methods as needed
});
