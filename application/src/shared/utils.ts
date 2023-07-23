import { IRepository, IUser, Repository, User } from "./interfaces";

export function compose<T>(...functions: ((arg: T) => T)[]): (arg: T) => T {
  return (input: T): T => functions.reduce((result, fn) => fn(result), input);
}

export function usersPresentter(users: IUser[]): User[] {
  return users.map((user) => {
    const { 
      id, 
      name, 
      login, 
      avatar_url, 
      location, 
      public_repos, 
      created_at, 
      update_at
    } = user;
    
    return { 
      id, 
      name, 
      login, 
      avatar_url, 
      location, 
      public_repos, 
      created_at, 
      update_at 
    };
  });
}

export function repositoriesPresentter(repos: IRepository[]): Repository[] {
  return repos.map((repo) => {
    const { 
      id, 
      name, 
      html_url, 
      language, 
      created_at
    } = repo;
    
    return { 
      id, 
      name, 
      html_url, 
      language, 
      created_at
    };
  });
}
  