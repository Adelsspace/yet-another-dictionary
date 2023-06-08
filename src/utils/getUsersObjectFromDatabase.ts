import { userData } from "../@types/types";

export const getUsersObjectFromDatabase = () => {
  const allUsersString = localStorage.getItem("users") as string;
  const allUsers: userData[] = JSON.parse(allUsersString);
  return allUsers;
};
