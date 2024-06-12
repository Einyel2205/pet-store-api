import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain"; //2
import { userModel } from "../../data/models/users.model"; // 9
import { BcryptAdapter } from "../../config";

//creamos types de los metodos de encriptacion

type HashFunction = (password: string) => string;

type CompareFunction = (password: string, hashed: string) => boolean;

export class AuthDataSourceImpl implements AuthDataSource {
  //INyeccion de dependencias para adapter de bcrypt
  constructor(
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare
  ) {}
  //1
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    //3
    const { name, email, password } = registerUserDto; //4

    try {
      //5
      //verificar si el correo existe
      const exists = await userModel.findOne({ email });
      if (exists) throw CustomError.badRequest("User already exists");

      //crear al usuario
      const user = await userModel.create({
        name: name,
        email: email,
        password: this.hashPassword(password),
      });

      //guardar el usuario en la base de datos
      await user.save();

      //TODO: Hash de contraseña

      //TODO: Mapear la respuesta a nuestra cantidad

      return new UserEntity(
        user.id, 
        name, 
        email, 
        user.password,
        user.roles); //6
    } catch (error) {
      if (error instanceof CustomError) {
        //7
        throw error;
      }
      throw CustomError.internalServer(); //8
    }
  }
}
