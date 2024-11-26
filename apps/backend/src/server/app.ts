import express from 'express';
import cors from "cors"

export const createApp = () => {

    const app = express();

    app
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        .use(cors())


    return app
}


