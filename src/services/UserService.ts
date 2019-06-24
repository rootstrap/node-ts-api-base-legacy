import User from '../models/User';
import userRepository, { UserRepository } from '../repositories/UserRepository';
import logger from '../utils/logger';

export class UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public findOne(id: number) {
    return this.repository.findOne(id);
  }

  public find(params: any) {
    return this.repository.find(params);
  }

  public async create(userParams: any) {
    const user = User.fromJson(userParams);
    return await this.repository.create(user);
  }

  public async update(id: number, userParams: any) {
    const user = await this.repository.findOne(id);
    return this.repository.update(id, user);
  }
}

export default new UserService(userRepository);
