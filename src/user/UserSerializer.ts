import User from './User';

export default ({ email, lastName, firstName, id }: User) => ({
  email,
  firstName,
  id,
  lastName,
});
