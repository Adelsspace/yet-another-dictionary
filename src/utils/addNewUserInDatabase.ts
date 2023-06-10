import { UserData } from "../@types/types";
import { getUsersObjectFromDatabase } from "./getUsersObjectFromDatabase";

export const addNewUserInDatabase = (newUser: UserData) => {
  const users = getUsersObjectFromDatabase();
  localStorage.setItem("users", JSON.stringify([...users, newUser]));
};
