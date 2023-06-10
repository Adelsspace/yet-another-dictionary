import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../@types/types";

const initialState: UserData = {
  login: "",
  isLogged: false,
  history: [],
  favorites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<string>) {
      state.login = action.payload;
    },
    setIsLogged(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
    },
    setLoginAndIsLoggedField(state, action: PayloadAction<string>) {
      state.login = action.payload;
      state.isLogged = true;
    },
    addToHistory(state, action: PayloadAction<string>) {
      if (state.history.includes(action.payload)) return;
      state.history.push(action.payload);
    },
    addToFavorites(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (word) => word !== action.payload
      );
    },
    setUserData(state, action: PayloadAction<UserData>) {
      const { login, isLogged, history, favorites } = action.payload;
      state.login = login;
      state.isLogged = isLogged;
      state.history = history;
      state.favorites = favorites;
    },
    setToInitialState(state, action: PayloadAction<boolean>) {
      state.login = "";
      state.isLogged = action.payload;
      state.history = [];
      state.favorites = [];
    },
  },
});
export const {
  setLogin,
  setIsLogged,
  setLoginAndIsLoggedField,
  addToHistory,
  addToFavorites,
  removeFromFavorites,
  setUserData,
  setToInitialState,
} = userSlice.actions;
export default userSlice.reducer;
