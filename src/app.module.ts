import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { TipoEntregaModule } from './tipo-entrega/tipo-entrega.module';
import { TipoEntregaController } from './tipo-entrega/tipo-entrega.controller';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaController } from './categoria/categoria.controller';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { PratoModule } from './pratos/prato.module';
import { RestauranteModule } from './restaurante/restaurante.module';

@Module({
  imports: [
    AvaliacaoModule,
    TipoEntregaModule,
    CategoriaModule,
    AuthModule,
    UserModule,
    PratoModule,
    RestauranteModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'eattog',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [
    TipoEntregaController,
    CategoriaController, AppController],
  providers: [AppService],
})
export class AppModule { }
