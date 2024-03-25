import { RegisterUserDto } from "../dtos";
import { User } from "../entities";

export abstract class AuthDataSource {
    abstract register(registerUserDto: RegisterUserDto): Promise<User>;

    // abstract login(loginUserDto: LoginUserDto): Promise<User>;
}