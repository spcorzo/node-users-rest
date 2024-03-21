import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain/dtos";

export class AuthController {
  constructor() {}

  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);

    if (error) return res.status(400).json({message: error});

    res.json(registerUserDto);
  };

  loginUser = (req: Request, res: Response) => {
    res.json({ message: "Login user controller" });
  };
}
