import express from 'express';
import cors from "cors"
import { errorHandler } from '../utils/error-handler';
import { routeGuard } from '../utils/routeHandler';

export const createApp = () => {

    const app = express();

    app
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        .use(cors())
        .get("/",
            routeGuard(async (_, res) => {
                res.json({ message: "Good to GO 👍" })
            }))
        .use(errorHandler)

    return app
}


