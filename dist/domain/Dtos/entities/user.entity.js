"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(//2 definimos el constructor
    //3 definición de los atributos 
    id, name, email, password, role, img) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.img = img;
    }
}
exports.UserEntity = UserEntity;
