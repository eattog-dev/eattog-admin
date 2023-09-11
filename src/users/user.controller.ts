import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service'
import { DeleteResult } from 'typeorm';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/usuarios')
  getUsers(): Promise<UserEntity[]> {
    return this.userService.getUsers();
  }

  @Post('criar/usuario')
  createUser(@Body() user: UserDto): Promise<UserEntity> {
    return this.userService.createUser(user);
  }

  @Get('usuario/:id')
  getUser(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.getUser(id);
  }

  @Put('atualizar/usuario/:id')
  editUser(
    @Param('id') id: number,
    @Body() user: UserDto
  ): Promise<UserEntity> {
    return this.userService.editUser(id, user);
  }

  @Delete('deletar/usuario/:id')
  deleteUser(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteUser(id);
  }

}
