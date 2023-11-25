import { Module } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UsersController } from './user.controller';
import { JwtService } from '@nestjs/jwt';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RestauranteEntity]),],
  controllers: [UsersController],
  providers: [UserService, JwtService],
  exports: [UserService]
})
export class UserModule { }