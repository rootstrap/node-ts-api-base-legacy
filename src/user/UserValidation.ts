import Joi from '@hapi/joi';

const UserSchema = Joi.object().keys({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const UserUpdateSchema = Joi.object().keys({
  email: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
});

export const validateUser = (user: any) => Joi.attempt(user, UserSchema);

export const validateUserUpdate = (user: any) => Joi.attempt(user, UserUpdateSchema);
