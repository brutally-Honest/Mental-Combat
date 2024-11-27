import { Request, Response, NextFunction, RequestHandler } from 'express';
import { APIError } from '../utils/error';

interface WrapperOptions {
    customErrorHandler?: (error: any, req: Request, res: Response, next: NextFunction) => void;
}

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const routeGuard = (handler: AsyncHandler, options: WrapperOptions = {}): RequestHandler => {
    const { customErrorHandler } = options;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res, next);
        } catch (error) {
            // Default 500 error
            const apiError = error instanceof Error
                ? (error instanceof APIError ? error : new APIError(error.message, 500))
                : new APIError(String(error), 500);

            if (customErrorHandler) {
                return customErrorHandler(apiError, req, res, next);
            }
            next(apiError);
        }
    };
};