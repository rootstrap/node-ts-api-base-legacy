import { NextFunction, Request, Response } from 'express';
import ApiError from '../errors/ApiError';
import { HttpStatus } from '../constants/HttpStatus';

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err) {
    res.statusCode = (err as ApiError).statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
    res.send({ message: err.message || 'Something went wrong' });
  } else {
    next(err);
  }
}
