import { config } from 'dotenv';

config();

export const __ = {
    DB_URL: process.env.DB_URL ?? 'mongodb://localhost:27017',
    DB_NAME: process.env.DB_NAME ?? 'quiz-app',
    PORT: process.env.PORT ?? 4700,
    JWT_SECRET_KEY: process.env.JWT_SECRET ?? 'GG',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '1h',
};
