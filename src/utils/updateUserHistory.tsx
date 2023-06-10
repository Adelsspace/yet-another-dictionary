import { UserData } from "../@types/types";
import { getUsersObjectFromDatabase } from "./getUsersObjectFromDatabase";

export const updateUserHistory = (
  login: string,
  stringifyedHistory: string
) => {
  const users = getUsersObjectFromDatabase();
  const updatedUsers: UserData[] = users.map((user) => {
    if (user.login === login) {
      if (!user.history.includes(stringifyedHistory)) {
        user.history.push(stringifyedHistory);
      }
    }
    return user;
  });
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};
