import { UserData } from "../@types/types";
import { getUsersObjectFromDatabase } from "./getUsersObjectFromDatabase";

export const changeLogged = (login: string, condition: boolean) => {
  const users = getUsersObjectFromDatabase();
  const updatedUsers: UserData[] = users.map((user) => {
    if (user.login === login) {
      user.isLogged = condition;
    }
    return user;
  });
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};
