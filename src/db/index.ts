import { createConnection, getConnectionOptions } from 'typeorm';
import User from '../models/User';
import entities from './Entities';

const connection = async () => {
  const options = await getConnectionOptions();
  createConnection({
    ...options,
    entities,
  });
};

export default connection;
