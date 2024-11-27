import { Request, Response, NextFunction } from "express"

// no need for try catch here, as it's handled by the route guard

const _GET_SINGLE_QUESTION = async (req: Request, res: Response, next: NextFunction) => {

}

const _GET_QUESTIONS = async (req: Request, res: Response, next: NextFunction) => {

}

const _POST_CREATE_QUESTION = async (req: Request, res: Response, next: NextFunction) => {

}

const _PUT_UPDATE_SINGLE_QUESTION = async (req: Request, res: Response, next: NextFunction) => {

}

export {
    _GET_SINGLE_QUESTION,
    _GET_QUESTIONS,
    _POST_CREATE_QUESTION,
    _PUT_UPDATE_SINGLE_QUESTION
}
