import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain/dtos";
import { AuthRepository } from "../../domain/repositories";
import { CustomError } from "../../domain/errors";

export class AuthController {
  constructor(
    private readonly authRepository: AuthRepository,
  ) {}

  private handleError = (error: unknown, res: Response) => {
    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).json({error: error.message});
    }

    console.log(error);

    return res.status(500).json({error: "Internal server error."});
  }

  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);

    if (error) return res.status(400).json({message: error});

    this.authRepository.register(registerUserDto!)
      .then(user => res.json(user))
      .catch(error => this.handleError(error, res));
  };

  loginUser = (req: Request, res: Response) => {
    res.json({ message: "Login user controller" });
  };
}
