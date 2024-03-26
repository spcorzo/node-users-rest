import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain/dtos";
import { AuthRepository, UsersRepository } from "../../domain/repositories";
import { CustomError } from "../../domain/errors";
import { JWTAdapter } from "../../config";
import { HttpErrorHandler } from "../helpers/http-error-handler";

export class UsersController {
  constructor(
    private readonly repository: UsersRepository,
  ) { }

  getAll = (req: Request, res: Response) => {
    const user = req.body.user;
    this.repository
      .getAll()
      .then(users => res.json({ users, user }))
      .catch(error => HttpErrorHandler.handle(error, res));
  };
}
