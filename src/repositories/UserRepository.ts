import {
  FindConditions,
  getRepository,
} from 'typeorm';
import User from '../user/User';

export class UserRepository {
  public findOne(id: number) {
    return this.getRepository().findOne(id);
  }

  public find(params: FindConditions<User>) {
    return this.getRepository().find(params);
  }

  public async create(user: User) {
    return await this.getRepository().save(user);
  }

  public async update(id: number, params: any) {
    await this.getRepository().update(id, params);
    return this.getRepository().findOne(id);
  }

  private getRepository() {
    return getRepository(User);
  }
}

export default new UserRepository();
