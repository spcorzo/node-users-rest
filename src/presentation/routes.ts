import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { UserRoutes } from "./users/routes";
import { JwtMiddleware } from "./middlewares";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/users", JwtMiddleware.validateJwt, UserRoutes.routes);

    return router;
  }
}
