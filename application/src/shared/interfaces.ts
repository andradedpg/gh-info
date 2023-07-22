export interface User {
    id: number;
    name: string;
    login: string;
    avatar_url?: string;
    location?: string;
    public_repos?: number;
    created_at?: string;
    update_at?: string;
}  

export interface NotFound {
    message: string;
} 

export type IUser = User & NotFound;

export function presentter(users: IUser[]): User[] {
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