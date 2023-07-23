import { ghGetUser, ghReposByUser } from "../services/github/github";
import { pgInsertRepositories } from "../services/postgres/repository";
import { pgGetUser, 
  pgInsertUser, 
  pgListUsers } from "../services/postgres/user";
import { usersPresentter } from "../shared/utils";

async function listLocalUsers(): Promise <void> {
  const list = await pgListUsers();
  
  if (list[0].message == 'Not Found')
  {
    console.log(`No users found 👎. Try use --username for ingest the first!`);
    return;
  }

  console.log(`Users found on local ✅`);
  console.table(
    usersPresentter(list), 
    ["login", "location", "public_repos", "created_at"]
  );
}

async function getOrCreateUser(
  username: string ,
): Promise <void> {
  let pgUser = await pgGetUser({ name: username });
    
  if (pgUser.message === 'Not Found') 
  {
    console.log(
      `User * ${username} * not found in local 👎. Fetching from GH API ...`
    );
    
    const ghUser = await ghGetUser({ name: username });
    if (ghUser.message === 'Not Found') 
    {
      console.error(`User * ${username} * not found in GH API👎. Sorry :'(`);
      return;
    }

    const user = await pgInsertUser(ghUser);
    console.log(
      `User * ${username} * imported from GH API to local database ✅`
    );

    const ghRepos = await ghReposByUser({ name: username }); 
    if (ghRepos[0].message === 'Not Found')
    {
      console.log(`User * ${username} * has no repositories 👎`);
    }
    else{
      await pgInsertRepositories(ghRepos, user);
      console.log(`
        Repositories from user * ${username} * imported to local database ✅
      `);
    } 

    pgUser = await pgGetUser({ name: username });
  }
  else{
    console.log(`User * ${username} * found in local ✅`);
  }
    
  console.table(usersPresentter([pgUser])[0]);
}

export { getOrCreateUser, listLocalUsers };  