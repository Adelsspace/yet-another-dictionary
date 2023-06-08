import { getUsersObjectFromDatabase } from "./getUsersObjectFromDatabase";

export const isPasswordCoorect = (login: string, password: string) => {
  const users = getUsersObjectFromDatabase();
  const user = users.find((user) => user.login === login);
  return user?.password === password;
};
