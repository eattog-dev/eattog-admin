import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService, private jwtService: JwtService) { }

  async signIn(email, password) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(password, user.senha);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.cpf };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
