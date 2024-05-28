import { Request, Response } from "express";
import { RegisterUserDto, AuthRepository } from "./../../domain";

export class AuthController {
  //1

  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = (req: Request, res: Response) => {
    //4
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    if (error) {
      return res.status(400).json({ error });
    }
    this.authRepository
      .register(registerUserDto!)
      .then((user) => res.json(user))
      .catch((error) => res.status(500).json(error));
  };

  loginUser = (req: Request, res: Response) => {
    res.json("login Controller");
  };
}
