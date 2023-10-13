import { ListaModule } from './listaCompras/lista.module';
import { CategoriaPratoModule } from './categoria-prato/categoria-prato.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { PratoModule } from './pratos/prato.module';
import { RestauranteModule } from './restaurante/restaurante.module';

@Module({
  imports: [
    ListaModule,
    CategoriaPratoModule,
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
    AppController],
  providers: [AppService],
})
export class AppModule { }
