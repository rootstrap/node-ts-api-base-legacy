import faker from 'faker';

export const fullUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email().toString(),
};
