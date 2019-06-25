import User from '../models/User';
import userRepository, { UserRepository } from '../repositories/UserRepository';
import { validateUser, validateUserUpdate } from '../validations/UserValidation';

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
    const params = validateUser(userParams);
    const user = User.fromJson(params);
    return await this.repository.create(user);
  }

  public async update(id: number, userParams: any) {
    const params = validateUserUpdate(userParams);
    return this.repository.update(id, params);
  }
}

export default new UserService(userRepository);
