import { RegisterUserDto } from "../dtos";
import { User } from "../entities/user.entity";

export abstract class AuthRepository {
    abstract register(registerUserDto: RegisterUserDto): Promise<User>;

    // abstract login(loginUserDto: LoginUserDto): Promise<User>;
}