import { AuthDataSource } from "../../domain/datasources";
import { RegisterUserDto } from "../../domain/dtos";
import { User } from "../../domain/entities";
import { CustomError } from "../../domain/errors";

export class AuthDatasourceImplementation implements AuthDataSource {

    async register(registerUserDto: RegisterUserDto): Promise<User> {
        const {name, email, password} = registerUserDto;

        try {
            return new User("1", name, email, password, ["ROLE_USER"]);
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }

            throw CustomError.internalServerError()
        }
    }

}