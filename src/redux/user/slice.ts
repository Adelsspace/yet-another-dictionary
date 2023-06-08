import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});
export const { setLogin, setIsLogged } = userSlice.actions;
export default userSlice.reducer;
