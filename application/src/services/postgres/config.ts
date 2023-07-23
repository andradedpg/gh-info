import { POSTGRES_DB, 
  POSTGRES_HOST, 
  POSTGRES_PORT, 
  POSTGRES_USER, 
  POSTGRES_PASSWORD } from '../../shared/constants';

import pgPromise from 'pg-promise';
import { IDatabase, IMain, QueryFile } from 'pg-promise';
import { IConnectionParameters } from 'pg-promise/typescript/pg-subset';
import * as path from 'path';

const connectionConfig: IConnectionParameters =  {
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD
};

const pgp: IMain = pgPromise({});
const db: IDatabase<IConnectionParameters> = pgp(connectionConfig); 

function sql(file: string): QueryFile {
  const fullPath = path.join(__dirname, 'sql', file);
  return new QueryFile(fullPath, { minify: true });
}

export const sqlQueries = {
  getUsers: sql('select_users.sql'),
  getUserByLogin: sql('select_user_by_login.sql'),
  insertUser: sql('insert_user.sql'), 
  insertRepository: sql('insert_repository.sql'), 
};

// Prevent SQL injection, XSS and other attacks
export function sanitizeInput(inputs:(string)[]):string[] {
  return inputs.map((input) => {
    return input
      .replace(/[^.\s,a-zA-Z0-9:_/]/gi, '')
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
  });
}

export default db;