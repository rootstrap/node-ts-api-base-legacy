import express from 'express';
import userService, { UserService } from '../../../services/UserService';

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
        users: users.map((user) => user.serialize()),
      });
    });

    this.router.post('/', async (req, res) => {
      try {
        const user = await this.service.create(req.body);
        res.send({ user: user.serialize() });
      } catch (error) {
        res.send({ error });
      }
    });
  }
}

export default new UserRouter(userService);
