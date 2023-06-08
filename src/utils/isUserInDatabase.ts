import { getUsersObjectFromDatabase } from "./getUsersObjectFromDatabase";

export const isUserInDatabase = (login: string) => {
  const users = getUsersObjectFromDatabase();
  return users?.some((user) => user.login === login);
};
