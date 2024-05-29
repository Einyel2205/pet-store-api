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
class AuthDataSourceImpl {
    register(registerUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = registerUserDto;
            try {
                //verificar si el correo existe 
                const exists = yield users_model_1.userModel.findOne({ email });
                if (exists)
                    throw domain_1.CustomError.badRequest("User already exists");
                //crear al usuario
                const user = yield users_model_1.userModel.create({
                    name: name,
                    email: email,
                    password: password,
                });
                //guardar el usuario en la base de datos 
                yield user.save();
                //TODO: Hash de contraseña
                //TODO: Mapear la respuesta a nuestra cantidad
                return new domain_1.UserEntity(user.id, name, email, password, user.roles);
            }
            catch (error) {
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer();
            }
        });
    }
}
exports.AuthDataSourceImpl = AuthDataSourceImpl;
