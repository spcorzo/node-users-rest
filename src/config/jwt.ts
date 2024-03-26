import jwt from "jsonwebtoken";
import { envs } from "./envs";

const JWT_SECRET = envs.JWT_SECRET;

export class JWTAdapter {
  static async createJwt(payload: object, duration = "2H"): Promise<string|null> {
    return new Promise((resolve) => {
      jwt.sign(payload, JWT_SECRET, { expiresIn: duration }, (error, token) => {
        if (error) return resolve(null);
        resolve(token!)
      })
    })
  }

  static async validateJwt<T>(token: string): Promise<T|null> {
    return new Promise((resolve) => {
      jwt.verify(token, JWT_SECRET, (error, payload) => {
        if (error) return resolve(null);

        resolve(payload as T);
      })
    })
  }
}