import { UserEntity } from '../../users/entities/user.entity';

export class LoginPayload {
    id: number;
    tipo_usuario: number;

    constructor(user: UserEntity) {
        this.id = user.id;
        this.tipo_usuario = user.tipo_usuario;
    }
}
