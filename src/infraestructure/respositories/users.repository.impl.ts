import { AuthDataSource, UsersDataSource } from "../../domain/datasources";
import { RegisterUserDto } from "../../domain/dtos";
import { User } from "../../domain/entities";
import { AuthRepository, UsersRepository } from "../../domain/repositories";


export class UsersRepositoryImplementation implements UsersRepository {
    constructor(
        private readonly dataSource: UsersDataSource
    ) {}
    getAll(): Promise<User[]> {
        return this.dataSource.getAll();
    }


}