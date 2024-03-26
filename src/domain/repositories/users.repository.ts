import { User } from "../entities";

export abstract class UsersRepository {
    abstract getAll(): Promise<User[]>;
}