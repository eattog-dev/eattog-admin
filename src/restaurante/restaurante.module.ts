import { Module } from '@nestjs/common';
import { RestauranteController } from './restaurante.controller'; 
import { RestauranteEntity } from './restaurante.entity'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteService } from './restaurante.service'; 
import { UploadService } from 'src/users/upload.service';
import { UserEntity } from 'src/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestauranteEntity, UserEntity])],
  controllers: [RestauranteController],
  providers: [RestauranteService, UploadService],
  exports: [RestauranteService]
})
export class RestauranteModule {}