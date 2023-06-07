import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  firstLang: ["Русский", "ru"],
  secondLang: ["Английский", "en"],
  searchValue: "",
};

const TranslateDirectionSlice = createSlice({
  name: "translateDirection",
  initialState,
  reducers: {
    setFirstLang(state, action: PayloadAction<string[]>) {
      state.firstLang = action.payload;
    },
    setSecondLang(state, action: PayloadAction<string[]>) {
      state.secondLang = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setFirstLang, setSecondLang, setSearchValue } =
  TranslateDirectionSlice.actions;
export default TranslateDirectionSlice.reducer;
