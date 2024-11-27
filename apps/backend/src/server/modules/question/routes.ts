import { NextFunction, Request, Response, Router } from 'express';
import { routeGuard } from '../../../shared/middleware/routeHandler';
import {
    _GET_SINGLE_QUESTION,
    _GET_QUESTIONS,
    _POST_CREATE_QUESTION,
    _PUT_UPDATE_SINGLE_QUESTION
} from './handlers';

export const questionRoute = Router();

questionRoute
    .route('/')
    .get(routeGuard(_GET_QUESTIONS))
    .post(routeGuard(_POST_CREATE_QUESTION))

questionRoute.route('/:_id')
    .get(routeGuard(_GET_SINGLE_QUESTION))
    .put(routeGuard(_PUT_UPDATE_SINGLE_QUESTION))


