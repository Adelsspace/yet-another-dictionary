import { UserData } from "../@types/types";

export const getUsersObjectFromDatabase = () => {
  const allUsersString = localStorage.getItem("users") as string;
  const allUsers: UserData[] = JSON.parse(allUsersString);
  return allUsers;
};
