import { Router } from "express"; // 2
import { AuthController } from "./controller";
import { AuthDataSourceImpl, AuthRepositoryImpl } from "../../infraestructure";

export class AuthRoutes {
  // 1

  static get routes(): Router {
    //3

    const router = Router(); //4

    const datasource = new AuthDataSourceImpl();
    const AuthRepository = new AuthRepositoryImpl(datasource);
    const controller = new AuthController(AuthRepository); //instancia de la clase AuthController

    // Definir todas mis rutas especificas
    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);

    return router; // 5
  }
}
