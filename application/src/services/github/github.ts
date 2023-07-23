import { IRepository, IUser } from '../../shared/interfaces';
import { GH_API_TOKEN, GH_API_URL } from "../../shared/constants";

const headers: Headers = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `token ${GH_API_TOKEN}`
})

export async function ghGetUser(
  request: { name: string },
): Promise <IUser> {
  const response = await fetch(`${GH_API_URL}/users/${request.name}`, {
    method: "GET",
    headers: headers,
  });

  const data = await response.json();
  return data;
}

export async function ghReposByUser(
  request: { name: string },
): Promise <IRepository[]> {
  const response = await fetch(`${GH_API_URL}/users/${request.name}/repos`, {
    method: "GET",
    headers: headers,
  });

  const data = await response.json();
  return data.length > 0 ? data : [{message: 'Not Found'}];

}