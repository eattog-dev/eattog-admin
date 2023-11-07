import { UserEntity } from '../../users/user.entity';
export declare class LoginPayload {
    id: number;
    tipo_usuario: number;
    constructor(user: UserEntity);
}
