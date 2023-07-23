import { Repository, User} from '../../shared/interfaces';
import db, { sanitizeInput, sqlQueries } from './config';

export async function pgInsertRepositories(
  request: Repository[],
  owner: User 
): Promise <void> {   
  request.forEach(async (repository) => {
    
    repository = deleteFields(repository);  

    const columns = sanitizeInput(Object.keys(repository));
    columns.push('github_user_id');
    
    const values  = Object.values(repository).map((value) => {
      return typeof value === 'string' ? sanitizeInput([value])[0] : value;
    });
    values.push(owner.id);
  
    try {
      await db.none(sqlQueries.insertRepository, {
        columns,
        values,
      });
    } catch (error) {
      console.error('Error inserting repositories:', error);
      throw error;
    }
  });
}

function deleteFields(repository: Repository)
{
  delete repository.owner;
  delete repository.permissions;
  delete repository.topics;

  return repository;
}