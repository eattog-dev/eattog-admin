import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import { NotFoundException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { ReturnUserDto } from 'src/users/dto/returnUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { validatePassword } from 'src/utils/password';

jest.mock('src/users/user.service');  // Mock do UserService
jest.mock('@nestjs/jwt');  // Mock do JwtService

describe('AuthService', () => {
    let service: AuthService;
    let userService: UserService;
    let jwtService: JwtService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuthService, UserService, JwtService],
        }).compile();

        service = module.get<AuthService>(AuthService);
        userService = module.get<UserService>(UserService);
        jwtService = module.get<JwtService>(JwtService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });


    it('should throw NotFoundException when user not found', async () => {
        const loginDto: LoginDto = {
            email: 'nonexistent@example.com',
            senha: 'password123',
        };

        // Mockando a função findUserByEmail do UserService para retornar undefined
        jest.spyOn(userService, 'findUserByEmail').mockResolvedValue(undefined);

        await expect(service.login(loginDto)).rejects.toThrowError(
            NotFoundException,
        );
    });


});
