import { UsersDataSource } from "../../domain/datasources";
import { User } from "../../domain/entities";
import { UserModel } from "../../data/mongodb";
import { UserMapper } from "../mappers";

export class UsersDatasourceImplementation implements UsersDataSource {

    async getAll(): Promise<User[]> {
        const dbUsers = await UserModel.find();
        const users = dbUsers.map(UserMapper.userEntityFromObject)
        return users;
    }

}