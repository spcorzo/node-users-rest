import { Request, Response } from "express";

export class AuthController {
  constructor() {}

  registerUser = (req: Request, res: Response) => {
    res.json({ message: "Register user controller" });
  };

  loginUser = (req: Request, res: Response) => {
    res.json({ message: "Login user controller" });
  };
}
