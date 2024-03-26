import { Router } from "express";
import { UsersDatasourceImplementation } from "../../infraestructure/datasources/users.datasource.impl";
import { UsersRepositoryImplementation } from "../../infraestructure/respositories/users.repository.impl";
import { UsersController } from "./controller";

export class UserRoutes {
    static get routes(): Router {
      const router = Router();
  
      const datasource = new UsersDatasourceImplementation();
      const repository = new UsersRepositoryImplementation(datasource);
      
      const controller = new UsersController(repository);
  
      router.get("/", controller.getAll);
  
      return router;
    }
  }