import { Body, Controller, Get, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Param, Request } from '@nestjs/common/decorators/http';
import { UserEntity } from './user.entity';
import { AuthGuard as SessionGuard } from '../guards/session.guard';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UserType } from './enum/user-type.enum';

@Controller('')
export class UsersController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @UseGuards(SessionGuard)
  @Get('/meu-perfil')
  show(
    @Request() req
  ): Promise<UserEntity> {
    console.log(req.user);
    return this.userService.show(req.user.id);
  }

  @Get('/usuario-normal')
  async getTodosUsuariosNormais() {
    return this.userService.getAllNormalUsers();
  }

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
