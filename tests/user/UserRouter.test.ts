import bodyParser from 'body-parser';
import { expect } from 'chai';
import express, { Express } from 'express';
import sinon from 'sinon';
import request from 'supertest';
import User from '../../src/models/User';
import userRouter from '../../src/user/UserRouter';
import userService from '../../src/user/UserService';
import { fullUser } from '../fixtures/UserFixture';

describe('UserRouter', () => {
  let app: Express;

  beforeEach(() => {
    const router = express.Router();
    router.use(bodyParser.json());
    router.use('/users', userRouter.router);
    app = express();
    app.use(router);
  });

  describe('GET users', () => {
    it('Returns a valid user list', async () => {
      const stub = sinon.stub(userService, 'find')
        .callsFake(() => Promise.resolve(
          [User.fromJson({...fullUser, id: 10 })],
        ));
      const { body: { users } } = await request(app)
        .get('/users');
      expect(users.length).to.equal(1);
      const user = users[0];
      expect(user.firstName).to.equal(fullUser.firstName);
      expect(user.lastName).to.equal(fullUser.lastName);
      expect(user.email).to.equal(fullUser.email);
      expect(user.id).to.not.undefined;
    });
  });

  describe('POST user', () => {
    it('Returns a valid user list', async () => {
      const stub = sinon.stub(userService, 'create')
        .callsFake(() => Promise.resolve(
          User.fromJson({...fullUser, id: 10 }),
        ));
      const { body: { user } } = await request(app)
        .post('/users');
      expect(user.firstName).to.equal(fullUser.firstName);
      expect(user.lastName).to.equal(fullUser.lastName);
      expect(user.email).to.equal(fullUser.email);
      expect(user.id).to.not.undefined;
    });
  });
});
