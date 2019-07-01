import { NextFunction, Request, Response } from 'express';
import { HttpStatus } from '../constants/HttpStatus';
import ApiError from '../errors/ApiError';

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
};
