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
export interface Repository {
  id: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  owner?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  permissions?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  topics?: any;
  html_url?: string;
  language?: string;
  created_at?: string;
  update_at?: string;
}
export interface NotFound {
  message: string;
} 

export type IUser = User & NotFound;

export type IRepository = Repository & NotFound;