import { UserEntity } from "../Dtos/entities/user.entity";
import { RegisterUserDto } from "../Dtos/auth/register-user.dto";

export abstract class AuthDataSource {

    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>

}  