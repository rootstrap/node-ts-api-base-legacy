import {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';

export default (handler: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  Promise.resolve(handler(req, res, next))
    .catch(next);
};
