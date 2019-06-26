import { ValidationError } from '@hapi/joi';
import { expect } from 'chai';
import userService from '../../src/user/UserService';
import { fullUser } from '../fixtures/UserFixture';

describe('UserService', () => {
  describe('create', () => {
    it('Creates a valid user', async () => {
      const user = await userService.create(fullUser);
      expect(user.firstName).to.equal(fullUser.firstName);
      expect(user.lastName).to.equal(fullUser.lastName);
      expect(user.email).to.equal(fullUser.email);
      expect(user.id).to.not.undefined;
    });

    it('Fails if missing params', async () => {
      try {
        await userService.create({
          firstName: fullUser.firstName,
        });
      } catch (error) {
        expect((error as ValidationError).message).to.not.undefined;
      }
    });
  });

  describe('update', () => {
    it('Updates a user', async () => {
      const user = await userService.create(fullUser);
      const updatedUser = await userService.update(user.id, { firstName: 'test' });
      expect(updatedUser.firstName).to.equal('test');
      expect(updatedUser.lastName).to.equal(user.lastName);
      expect(updatedUser.email).to.equal(user.email);
      expect(updatedUser.id).to.equal(user.id);
    });

    it('Fails if invalid params', async () => {
      try {
        await userService.create({
          firstName: 10,
        });
      } catch (error) {
        expect((error as ValidationError).message).to.not.undefined;
      }
    });
  });

  describe('findOne', () => {
    it('find a user', async () => {
      const user = await userService.create(fullUser);
      const found = await userService.findOne(user.id);
      expect(found.firstName).to.equal(user.firstName);
      expect(found.lastName).to.equal(user.lastName);
      expect(found.email).to.equal(user.email);
      expect(found.id).to.equal(user.id);
    });

    it('Returns undefined if not found', async () => {
      const user = await userService.findOne(20);
      expect(user).to.undefined;
    });
  });

  describe('find', () => {
    it('returns a list of users', async () => {
      const user = await userService.create(fullUser);
      const found = await userService.find({ firstName: fullUser.firstName });
      expect(found).to.not.empty;
    });
  });
});
