import { Body, Controller, Get, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Param, Request } from '@nestjs/common/decorators/http';
import { UserEntity } from './user.entity';
import { AuthGuard as SessionGuard } from '../guards/session.guard';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UserType } from './enum/user-type.enum';
import { ReturnUserDto } from './dto/returnUser.dto';
import { UserId } from 'src/decorators/user-id.decorator';
import { ReturnRestauranteUserDto } from './dto/return-restaurante-usuario.dto';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('')
export class UsersController {
  constructor(
    private readonly userService: UserService,
  ) { }

  // @UseGuards(SessionGuard)
  // @Get('/meu-perfil')
  // show(
  //   @Request() req
  // ): Promise<UserEntity> {
  //   console.log(req.user);
  //   return this.userService.show(req.user.id);
  // }
  @Roles(UserType.Admin)
  @Get('/usuario-normal')
  async getTodosUsuariosNormais() {
    return this.userService.getAllNormalUsers();
  }

  @Get('/meu-perfil')
  async getUsuarioId(@UserId() usuarioId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(await this.userService.getUserByIdUsingRelations(usuarioId));

  }
  @Roles(UserType.Admin)
  @Get('/meus-restaurantes')
  async getUsuarioRestauranteId(@UserId() usuarioId: number): Promise<ReturnRestauranteUserDto> {
    return new ReturnRestauranteUserDto(await this.userService.getUserByIdUsingRelationsRestaurante(usuarioId));

  }
  @Roles(UserType.Admin)
  @Get('/usuario-admin')
  async getTodosUsuariosAdmin() {
    return this.userService.getAllAdminUsers();
  }

  @UseGuards(SessionGuard)
  @Put('/atualizar-usuario/:id')
  update(
    @Param('id') id: number,
    @Body() updateUser: UserDto
  ): Promise<UserEntity> {
    return this.userService.update(id, updateUser);
  }
  
  @Post('/cadastrar/admin')
  @UsePipes(ValidationPipe)
  async createAdmin(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.criaUsuario(createUser, UserType.Admin);
  }

  @Post('/cadastrar/user')
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.criaUsuario(createUser);
  }
}
