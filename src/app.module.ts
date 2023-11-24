import { CarrinhoPratoModule } from './carrinho-produto/carrinho-prato.module';
import { CarrinhoCompraModule } from './carrinho-compra/carrinho-compra.module';
import { EnderecoModule } from './endereco/endereco.module';
import { StripeService } from './stripe/stripe.service';
import { AuthModule } from './auth/auth.module';
import { UploadService } from './users/upload.service';
// import { ListaModule } from './listaCompras/lista.module';
import { CategoriaPratoModule } from './categoria-prato/categoria-prato.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { PratoModule } from './pratos/prato.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    CarrinhoPratoModule,
    CarrinhoCompraModule,
    EnderecoModule,
    AuthModule,
    // ListaModule,
    CategoriaPratoModule,
    UserModule,
    PratoModule,
    RestauranteModule,
    JwtModule,
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
  providers: [
    StripeService,
    UploadService, AppService, JwtService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },],

})
export class AppModule { }
