import { AuthDataSource } from "../../domain/datasources";
import { RegisterUserDto } from "../../domain/dtos";
import { User } from "../../domain/entities";
import { AuthRepository } from "../../domain/repositories";


export class AuthRepositoryImplementation implements AuthRepository {
    constructor(
        private readonly authDataSource: AuthDataSource
    ) {}

    register(registerUserDto: RegisterUserDto): Promise<User> {
        return this.authDataSource.register(registerUserDto);
    }

}