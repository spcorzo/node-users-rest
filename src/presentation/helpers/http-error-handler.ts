import { Response } from "express";
import { CustomError } from "../../domain/errors";

export class HttpErrorHandler {
    static handle = (error: unknown, res: Response) => {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode).json({error: error.message});
        }
    
        console.log(error);
    
        return res.status(500).json({error: "Internal server error."});
      }
}