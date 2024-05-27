import { UserEntity } from "../Dtos/entities/user.entity";//2
import { RegisterUserDto } from '../Dtos/auth/register-user.dto';//3


export abstract class AuthRepository { // 1
    abstract register(registerUserDto:RegisterUserDto): Promise<UserEntity> //4

} 