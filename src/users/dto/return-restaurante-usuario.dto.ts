import { UserEntity } from '../entities/user.entity';
import { ReturnRestauranteDto } from 'src/restaurante/dto/return-restaurante.dto';

export class ReturnRestauranteUserDto {
    restaurante?: ReturnRestauranteDto[];

    constructor(userEntity: UserEntity) {
        this.restaurante = userEntity.restaurante ? userEntity.restaurante.map((restaurante) => new ReturnRestauranteDto(restaurante)) : undefined;
    }
}
