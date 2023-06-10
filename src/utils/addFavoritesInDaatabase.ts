import { UserData } from "../@types/types";
import { getUsersObjectFromDatabase } from "./getUsersObjectFromDatabase";

export const addFavoritesInDaatabase = (
  login: string,
  stringifyedFavorites: string
) => {
  const users = getUsersObjectFromDatabase();
  const updatedUsers: UserData[] = users.map((user) => {
    if (user.login === login) {
      if (!user.favorites.includes(stringifyedFavorites)) {
        user.favorites.push(stringifyedFavorites);
      }
    }
    return user;
  });
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};
