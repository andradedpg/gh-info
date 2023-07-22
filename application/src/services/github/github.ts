import { User } from '../../shared/interface';
import { GH_API_TOKEN, GH_API_URL } from "../../shared/constants";

const headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `token ${GH_API_TOKEN}`
})

export async function ghGetUser(
  request: { name: string },
): Promise <User> {
  const response = await fetch(`${GH_API_URL}/users/${request.name}`, {
    method: "GET",
    headers: headers,
  });

  const data = await response.json();
  return data;
}