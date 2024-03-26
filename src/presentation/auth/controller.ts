import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain/dtos";
import { AuthRepository } from "../../domain/repositories";
import { CustomError } from "../../domain/errors";
import { JWTAdapter } from "../../config";
import { HttpErrorHandler } from "../helpers/http-error-handler";

export class AuthController {
  constructor(
    private readonly authRepository: AuthRepository,
  ) {}

  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);

    if (error) return res.status(400).json({message: error});

    this.authRepository.register(registerUserDto!)
      .then(async user => res.json({
        user,
        token: await JWTAdapter.createJwt({id: user.id})
      }))
      .catch(error => HttpErrorHandler.handle(error, res));
  };

  loginUser = (req: Request, res: Response) => {
    res.json({ message: "Login user controller" });
  };
}
