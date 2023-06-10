import { UserData } from "../@types/types";
import { getUsersObjectFromDatabase } from "./getUsersObjectFromDatabase";

export const removeFavoritesInDatabase = (
  login: string,
  stringifyedFavorites: string
) => {
  const users = getUsersObjectFromDatabase();
  const updatedUsers: UserData[] = users.map((user) => {
    if (user.login === login)
      user.favorites = user.favorites.filter((word) => {
        return word !== stringifyedFavorites;
      });
    return user;
  });
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};
