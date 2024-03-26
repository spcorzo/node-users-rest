import { User } from "../entities";

export abstract class UsersDataSource {
    abstract getAll(): Promise<User[]>;
}