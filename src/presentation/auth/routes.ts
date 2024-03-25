import { Router } from "express";
import { AuthController } from "./controller";
import { AuthRepositoryImplementation } from "../../infraestructure/respositories";
import { AuthDatasourceImplementation } from "../../infraestructure/datasources";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new AuthDatasourceImplementation();
    const authRepository = new AuthRepositoryImplementation(datasource);
    
    const controller = new AuthController(authRepository);

    router.post("/login", controller.loginUser);

    router.post("/register", controller.registerUser);

    return router;
  }
}
