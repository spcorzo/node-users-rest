import mongoose from 'mongoose';

interface Options {
    mongoUrl: string;
    dbName: string;
}

export class MongoDatabase {
    static async connect(options: Options) {
        const { dbName, mongoUrl } = options;
        try {
            console.log("Mongo connected");
            await mongoose.connect(mongoUrl, {dbName});
            return true;
        } catch (error) {
            console.log("Mongo connection error.");
            throw error;
        }
    }
}