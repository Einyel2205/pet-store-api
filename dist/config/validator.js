"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
class validators {
    static get email() {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //3 retorno de la expresion regular que validará el email correcto
    }
}
exports.validators = validators;
