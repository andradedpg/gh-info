import { ghGetUser } from "../services/github/github";
import { pgGetUser, 
  pgInsertUser, 
  pgListUsers } from "../services/postgres/user";
import { presentter } from "../shared/interfaces";

async function listLocalUsers(): Promise <void> {
  const list = await pgListUsers();
  if (list[0].message === 'Not Found')
  {
    console.log(`No users found 👎. Sorry.`);
    return;
  }

  console.log(`Users found on local ✅`);
  console.table(
    presentter(list), 
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

    await pgInsertUser(ghUser);
    console.log(
      `User * ${username} * imported from GH API to local database ✅`
    );
    pgUser = await pgGetUser({ name: username });
  }
    
  console.log(`User * ${username} * found in local ✅`);
  console.table(presentter([pgUser])[0]);
}

export { getOrCreateUser, listLocalUsers };  