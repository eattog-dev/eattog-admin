import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { Param, Request } from '@nestjs/common/decorators/http';
import { UserEntity } from './user.entity';
import { AuthGuard as SessionGuard } from './session.guard';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { SessionDto } from './dto/session.dto';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @UseGuards(SessionGuard)
  @Get('meu-perfil')
  show(
    @Request() req
  ): Promise<UserEntity> {
    console.log(req.user);
    return this.userService.show(req.user.id);
  }

  @UseGuards(SessionGuard)
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateUser: UserDto
  ): Promise<UserEntity> {
    return this.userService.update(id, updateUser);
  }

  @Post('sign-up')
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.criaUsuario(createUser);
  }

  // @Post('sign-in')
  // login(
  //   @Body() signInUser: UserDto
  // ): Promise<SessionDto> {
  //   return this.userService.signIn(signInUser);
  // }

}
