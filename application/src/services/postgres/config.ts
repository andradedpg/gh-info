import { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD } from '../../shared/constants';
import { IDatabase, IMain, QueryFile } from 'pg-promise';
import pgPromise from 'pg-promise';
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
const db: IDatabase<any> = pgp(connectionConfig); // eslint-disable-line @typescript-eslint/no-explicit-any

function sql(file: string): QueryFile {
    const fullPath = path.join(__dirname, 'sql', file);
    return new QueryFile(fullPath, { minify: true });
}

export const sqlQueries = {
    getUsers: sql('get_users.sql'),
};

export default db;