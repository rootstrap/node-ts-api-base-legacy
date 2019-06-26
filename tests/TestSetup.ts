import chai from 'chai';
import dotenv from 'dotenv';
import mocha from 'mocha';
import path from 'path';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import { entities } from '../src/db';

dotenv.config({ path: path.resolve(process.cwd(), '.env.test') });

let connection: Connection;

const setupDb = async () => {
  const connectionOptions = await getConnectionOptions();
  connection = await createConnection({
    ...connectionOptions,
    synchronize: true,
    dropSchema: true,
    entities,
  });
};

mocha.before(async () => {
  chai.use(sinonChai);
  await setupDb();
});

mocha.afterEach(() => {
  sinon.restore();
  sinon.reset();
});

mocha.after(async () => {
  await connection.close();
});
