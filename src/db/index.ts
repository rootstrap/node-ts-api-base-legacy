import { createConnection } from 'typeorm';
import User from '../user/User';

export const entities = [
  User,
];

const connection = () => createConnection();

export default connection;
