import { hashSync, compareSync } from "bcryptjs";

export class BcryptAdapter {
    static hash(password: string): string {
        return hashSync(password);
    }

    static compareHash(plainPassword: string, hashedPassword: string): boolean {
        return compareSync(plainPassword, hashedPassword);
    }
}