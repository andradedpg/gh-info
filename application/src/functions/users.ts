import { ghGetUser } from "../services/github/github";
import { pgGetUser } from "../services/postgres/user";

async function getOrCreateUser(
    username: string ,
  ): Promise <any> { // eslint-disable-line @typescript-eslint/no-explicit-any
    const pgUser = await pgGetUser({ name: username });

    if (pgUser.length > 0) {
        console.log(`User ${username} found in local database`);
        console.table(pgUser);
    }else{
        const ghUser = await ghGetUser({ name: username });
        console.table(ghUser);
    }
  }

export { getOrCreateUser };  