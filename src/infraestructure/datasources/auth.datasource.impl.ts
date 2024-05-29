import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain"; //2
import { userModel } from "../../data/models/users.model"; // 9

export class AuthDataSourceImpl implements AuthDataSource {
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {

    const { name, email, password } = registerUserDto;

    try {
        //verificar si el correo existe 
        const exists = await userModel.findOne({ email });
        if(exists) throw CustomError.badRequest("User already exists");

        //crear al usuario
        const user = await userModel.create({
            name: name,
            email: email,
            password: password,
        });

        //guardar el usuario en la base de datos 
        await user.save();

        //TODO: Hash de contraseña

        //TODO: Mapear la respuesta a nuestra cantidad

        return new UserEntity(
          user.id,
          name,
          email,
          password,
          user.roles
        );

    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
