import { RootState } from "../store";

export const selectLogin = (state: RootState) => state.userSlice.login;
export const selectIsLogged = (state: RootState) => state.userSlice.isLogged;
