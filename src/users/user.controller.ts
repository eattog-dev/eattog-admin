import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service'
import { DeleteResult } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('')
  getUsers(): Promise<UserEntity[]> {
    return this.userService.getUsers();
  }

  @Post('')
  createUser(@Body() user: UserDto): Promise<UserEntity> {
    return this.userService.createUser(user);
  }

  @Get(':id')
  getUser(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.getUser(id);
  }

  @Put(':id')
  editUser(
    @Param('id') id: number,
    @Body() user: UserDto
  ): Promise<UserEntity> {
    return this.userService.editUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteUser(id);
  }

}
