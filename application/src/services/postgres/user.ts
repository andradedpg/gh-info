import db, { sqlQueries } from './config';
import { User } from '../../shared/interface';

export async function pgGetUser(
    request: { name: string },
  ): Promise <User[]> {
    try {
      const data = await db.any(sqlQueries.getUsers, [request.name]);
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }