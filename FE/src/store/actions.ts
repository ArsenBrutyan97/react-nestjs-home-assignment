import { ADD_USER, GET_ALL_USERS } from "./types";

export function addUser(username: string) {
  return { type: ADD_USER, payload: username };
}

export function getAllUsers(users: string[]) {
  return { type: GET_ALL_USERS, payload: users };
}
