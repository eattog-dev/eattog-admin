import { Module } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersController } from './user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      global: true,
      secret: "asdkljaskdjlaskljd",
      signOptions: { expiresIn: '3600s' },
    })
  ],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule { }