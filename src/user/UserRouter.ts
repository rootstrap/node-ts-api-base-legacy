import express from 'express';
import asyncMiddleware from '../middlewares/AsyncMiddleware';
import serializeUser from './UserSerializer';
import userService, { UserService } from './UserService';

export class UserRouter {
  public router: express.Router;
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
    this.router = express.Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get('/', asyncMiddleware(async (req, res) => {
      const users = await this.service.find(req.query);
      res.send({
        users: users.map((user) => serializeUser(user)),
      });
    }));

    this.router.post('/', asyncMiddleware(async (req, res) => {
      const user = await this.service.create(req.body);
      res.send({ user: serializeUser(user) });
    }));
  }
}

export default new UserRouter(userService);
