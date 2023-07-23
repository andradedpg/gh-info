import { ghReposByUser } from "../services/github/github";

async function getRepositoriesByUser(
  username: string ,
): Promise <void> {
  
  const ghUserRepositories = await ghReposByUser({ name: username }); 
  if (ghUserRepositories[0].message === 'Not Found')
  {
    console.log(`User * ${username} * has no repositories 👎`);
    return;
  }
}

export { getRepositoriesByUser };  