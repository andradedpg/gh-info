import db, { sqlQueries, sanitizeInput } from './config';
import { IUser, User } from '../../shared/interfaces';

export async function pgListUsers(): Promise <IUser[]> {
  try {
    const data = await db.query(sqlQueries.getUsers);
    return data.length > 0 ? data : [{message: 'Not Found'}];

  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}
export async function pgGetUser(
  request: { name: string },
): Promise <IUser> {
  try {
    const data = await db.any(
      sqlQueries.getUserByLogin, 
      sanitizeInput([request.name])
    );

    return data.length > 0 ? data[0] : {message: 'Not Found'}; 
      
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function pgInsertUser(
  request: User,
): Promise <void> {    
  const columns = sanitizeInput(Object.keys(request));
  const values  = Object.values(request).map((value) => {
    return typeof value === 'string' ? sanitizeInput([value])[0] : value;
  });

  try {
    await db.none(sqlQueries.insertUser, {
      columns,
      values,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}