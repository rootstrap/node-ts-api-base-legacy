import User from '../models/User';

export default ({ email, lastName, firstName, id }: User) => ({
  email,
  firstName,
  id,
  lastName,
});
