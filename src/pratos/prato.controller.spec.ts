import { Test, TestingModule } from '@nestjs/testing';
import { PratoController } from './prato.controller';
import { PratoService } from './prato.service';
import { UploadService } from 'src/users/upload.service';

describe('PratoController', () => {
    let controller: PratoController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PratoController],
            providers: [PratoService, UploadService], // Adicione outros serviços necessários
        }).compile();

        controller = module.get<PratoController>(PratoController);
    });

    // Use "xit" ou "fit" para desativar temporariamente o teste
    xit('should be defined', () => {
        expect(controller).toBeDefined();
    });

    // Adicione mais testes conforme necessário para cada rota/método no PratoController
});
