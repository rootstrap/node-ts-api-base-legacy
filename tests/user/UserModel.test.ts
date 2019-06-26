import { expect } from 'chai';
import User from '../../src/user/User';
import { fullUser } from '../fixtures/UserFixture';

describe('User Model', () => {
  describe('fromJson', () => {
    it('Returns a valid user', () => {
      const user = User.fromJson(fullUser);
      expect(user.firstName).to.equal(fullUser.firstName);
      expect(user.lastName).to.equal(fullUser.lastName);
      expect(user.email).to.equal(fullUser.email);
      expect(user.id).to.undefined;
    });
  });
});
