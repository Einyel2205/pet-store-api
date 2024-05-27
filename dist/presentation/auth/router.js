"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express"); // 2
const controller_1 = require("./controller");
const infraestructure_1 = require("../../infraestructure");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)(); //4 
        const datasource = new infraestructure_1.AuthDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthRepositoryImpl(datasource);
        const controller = new controller_1.AuthController(AuthRepository); //instancia de la clase AuthController
        // Definir todas mis rutas especificas
        router.post('/login', controller.loginUser);
        router.post('/register', controller.registerUser);
        return router; // 5
    }
}
exports.AuthRoutes = AuthRoutes;
