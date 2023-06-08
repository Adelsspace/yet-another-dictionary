import { getUsersObjectFromDatabase } from "./getUsersObjectFromDatabase";

export const searchLoggedUser = () => {
  const users = getUsersObjectFromDatabase();
  const user = users.find((user) => user.isLogged);
  return user?.login || null;
};
