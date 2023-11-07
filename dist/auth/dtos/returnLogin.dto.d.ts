import { ReturnUserDto } from '../../users/dto/returnUser.dto';
export interface ReturnLogin {
    user: ReturnUserDto;
    accessToken: string;
}
