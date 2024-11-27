import { Router } from 'express';
import { questionRoute } from '../modules/question/routes';

export const apiRoute = Router();

apiRoute.use('/questions', questionRoute);


