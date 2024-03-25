import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { AuthDataSource } from "../../domain/datasources";
import { RegisterUserDto } from "../../domain/dtos";
import { User } from "../../domain/entities";
import { CustomError } from "../../domain/errors";
import { UserMapper } from "../mappers";

type HashFunction = (password: string) => string;
type CompareFunction = (plainPassword: string, hashedPassword: string) => boolean;

export class AuthDatasourceImplementation implements AuthDataSource {
    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compareHash,
    ) {}

    async register(registerUserDto: RegisterUserDto): Promise<User> {
        const {name, email, password} = registerUserDto;

        try {
            const emailExists = await UserModel.findOne({email});
            if (emailExists) throw CustomError.badRequest("User already exists");
            
            const passwordHashed = this.hashPassword(password);

            const user = await UserModel.create({
                name,
                email,
                password: passwordHashed
            });

            await user.save();       
            return UserMapper.userEntityFromObject(user);
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }

            throw CustomError.internalServerError()
        }
    }

}