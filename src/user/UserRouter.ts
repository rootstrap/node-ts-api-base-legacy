import express from 'express';
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
    this.router.get('/', async (req, res) => {
      const users = await this.service.find(req.query);
      res.send({
        users: users.map((user) => serializeUser(user)),
      });
    });

    this.router.post('/', async (req, res) => {
      try {
        const user = await this.service.create(req.body);
        res.send({ user: serializeUser(user) });
      } catch (error) {
        res.send({ error });
      }
    });
  }
}

export default new UserRouter(userService);
