import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { APIError } from './error';

const errorHandler: ErrorRequestHandler =
    (
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        console.log(`[GLOBAL ERROR HANDLER] - \n${error.stack}`)

        if (error instanceof APIError) {
            const { statusCode } = error
            res.status(statusCode).json(error.respond())
        } else {
            res.status(500).json({ message: "Internal Server Error" })
        }
    };

export { errorHandler };
