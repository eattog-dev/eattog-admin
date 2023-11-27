import { Body, Controller, Delete, Get, NotFoundException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/users/enum/user-type.enum';
import { CarrinhoCompraEntity } from './entities/carrinho-compra.entity';
import { InserirCarrinhoCompraDTO } from './dto/inserir-carrinho-compra.dto';
import { CarrinhoCompraService } from './carrinho-compra.service';
import { UserId } from 'src/decorators/user-id.decorator';
import { ReturnCarrinhoCompraDTO } from './dto/return-carrinho-compra.dto';
import { DeleteResult } from 'typeorm';
import { StripeService } from 'src/stripe/stripe.service';

// @Roles(UserType.User)
@Controller('carrinho-compra')
export class CarrinhoCompraController {

    constructor(
        private readonly carrinhoCompraService: CarrinhoCompraService,
        private readonly stripeService: StripeService,
    ) {

    }

    @UsePipes(ValidationPipe)
    @Post()
    async inserirCarrinho(
        @Body() criarCarrinhoCompra: InserirCarrinhoCompraDTO,
        @UserId() usuarioId: number
    ): Promise<CarrinhoCompraEntity> {
        return this.carrinhoCompraService.inserirProdutoNoCarrinho(criarCarrinhoCompra, usuarioId);
    }

    @Get()
    async findPratoUsuarioId(@UserId() usuarioId: number): Promise<ReturnCarrinhoCompraDTO> {
        return await this.carrinhoCompraService.findCarrinhoUsuarioId(usuarioId, true);
    }

    @Get("/:id")
    async pegaCarrinhoId(@Param() id: number): Promise<CarrinhoCompraEntity> {
        return this.carrinhoCompraService.findCarrinhoId(id)
    }

    @Delete()
    async limparCarrinho(@UserId() usuarioId: number): Promise<DeleteResult> {
        return this.carrinhoCompraService.limpaCarrinho(usuarioId);
    }

    @Get("/checkout")
    async checkout(@UserId() usuarioId: number) {
        const lista = await this.carrinhoCompraService.findCarrinhoUsuarioId(usuarioId, true);
        if (!lista) {
            throw new NotFoundException('Carrinho não encontrado');
        }
        const sessaoCheckout = await this.stripeService.criarSessaoCompra(lista);
        return sessaoCheckout;
    }
}
