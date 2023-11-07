import { UserModule } from 'src/users/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UserModule,
        JwtModule.registerAsync({
            useFactory: () => ({
                global: true,
                secret: "asdkljaskdjlaskljd",
                signOptions: { expiresIn: '3600s' },
            }),
        }),
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService],
})
export class AuthModule { }
