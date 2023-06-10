import { UserData } from "../@types/types";
import { getUsersObjectFromDatabase } from "./getUsersObjectFromDatabase";

export const getUserDataFromDatabase = (login: string) => {
  const users = getUsersObjectFromDatabase();
  return users.find((user) => user.login === login) as UserData;
};
