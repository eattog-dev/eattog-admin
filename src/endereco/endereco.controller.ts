import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarEnderecoDto } from './dto/criar_endereco.dto';
import { EnderecoService } from './endereco.service';
import { EnderecoEntity } from './endereco.entity';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('endereco')
export class EnderecoController {
    constructor(private readonly enderecoService: EnderecoService) { }
    
    @Post()
    @UsePipes(ValidationPipe)
    async createAddress(
      @Body() criarEnderecoDto: CriarEnderecoDto,
      @UserId() usuarioId: number,
    ): Promise<EnderecoEntity> {
      return this.enderecoService.criarEndereco(criarEnderecoDto, usuarioId);
    }
}
