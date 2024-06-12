"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDataSourceImpl = void 0;
const domain_1 = require("../../domain"); //2
const users_model_1 = require("../../data/models/users.model"); // 9
const config_1 = require("../../config");
class AuthDataSourceImpl {
    //INyeccion de dependencias para adapter de bcrypt
    constructor(hashPassword = config_1.BcryptAdapter.hash, comparePassword = config_1.BcryptAdapter.compare) {
        this.hashPassword = hashPassword;
        this.comparePassword = comparePassword;
    }
    //1
    register(registerUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            //3
            const { name, email, password } = registerUserDto; //4
            try {
                //5
                //verificar si el correo existe
                const exists = yield users_model_1.userModel.findOne({ email });
                if (exists)
                    throw domain_1.CustomError.badRequest("User already exists");
                //crear al usuario
                const user = yield users_model_1.userModel.create({
                    name: name,
                    email: email,
                    password: this.hashPassword(password),
                });
                //guardar el usuario en la base de datos
                yield user.save();
                //TODO: Hash de contraseña
                //TODO: Mapear la respuesta a nuestra cantidad
                return new domain_1.UserEntity(user.id, name, email, user.password, user.roles); //6
            }
            catch (error) {
                if (error instanceof domain_1.CustomError) {
                    //7
                    throw error;
                }
                throw domain_1.CustomError.internalServer(); //8
            }
        });
    }
}
exports.AuthDataSourceImpl = AuthDataSourceImpl;
