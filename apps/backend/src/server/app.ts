import express from 'express';
import cors from "cors"
import { routeGuard } from '../shared/middleware/routeHandler';
import { errorHandler } from '../shared/middleware/errorHandler';
import { apiRoute } from './routes';

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
        .use('/api', apiRoute)
        .use(errorHandler)

    return app
}


