import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserType } from '../users/enum/user-type.enum'
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/guards/constantes';
import { LoginPayload } from 'src/auth/dtos/loginPayload.dto';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private readonly jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const requiredRoles = this.reflector.getAllAndOverride<UserType[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);


    if (!requiredRoles) {
      return true;
    }

    const { authorization } = context.switchToHttp().getRequest().headers;
    const loginPayload: LoginPayload | undefined = await this.jwtService.verifyAsync(authorization,
      { secret: jwtConstants.secret }).catch(() => undefined)

    if (!loginPayload) {
      return false;
    }

    console.log('authorization', authorization);

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => role === loginPayload.tipo_usuario);
  }
}