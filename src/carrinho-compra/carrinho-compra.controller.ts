import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/users/enum/user-type.enum';
import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';
import { CarrinhoCompraService } from './carrinho-compra.service';
import { UserId } from 'src/decorators/user-id.decorator';

@Roles(UserType.User)
@Controller('carrinho-compra')
export class CarrinhoCompraController {

    constructor(
        private readonly carrinhoCompraService: CarrinhoCompraService
    ) {

    }

    @UsePipes(ValidationPipe)
    @Post()
    async inserirCarrinho(
        @Body() criarCarrinhoCompra: InserirCarrinhoCompraDTO,
        @UserId() usuarioId: number
    ): Promise<CarrinhoCompraEntity> {
        return this.carrinhoCompraService.inserirProdutoNoCarrinho(criarCarrinhoCompra, usuarioId)
    }
}
