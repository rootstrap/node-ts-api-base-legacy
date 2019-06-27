import bodyParser from 'body-parser';
import { expect } from 'chai';
import express, { Express } from 'express';
import sinon from 'sinon';
import request from 'supertest';
import errorMiddleware from '../../src/middlewares/ErrorMiddleware';
import { HttpStatus } from '../../src/constants/HttpStatus';
import ApiError from '../../src/errors/ApiError';

describe('ErrorMiddleware', () => {
  let app: Express;

  before(() => {
    const router = express.Router();
    router.use(bodyParser.json());
    router.get('/', () => {
      throw new Error();
    });
    router.get('/401', () => {
      throw new ApiError(HttpStatus.UNAUTHORIZED, 'Invalid credentials');
    });
    router.get('/custom', () => {
      throw new ApiError(null, 'Custom error');
    });
    router.get('/success', (req, res) => {
      res.send({ message: 'Success' });
    });
    router.use(errorMiddleware);
    app = express();
    app.use(router);
  });

  describe('Error Middleware', () => {
    it('Returns 500 if no status code set', async () => {
      const { body: { message }, status } = await request(app)
        .get('/');
      expect(message).to.equal('Something went wrong');
      expect(status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR);
    });

    it('Returns message if set and 500 status code', async () => {
      const { body: { message }, status } = await request(app)
        .get('/custom');
      expect(message).to.equal('Custom error');
      expect(status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR);
    });

    it('Returns status code and message if set', async () => {
      const { body: { message }, status } = await request(app)
        .get('/401');
      expect(message).to.equal('Invalid credentials');
      expect(status).to.equal(HttpStatus.UNAUTHORIZED);
    });

    it('Returns response if no error is thrown', async () => {
      const { body: { message } } = await request(app)
        .get('/success');
      expect(message).to.equal('Success');
    });
  });
});
