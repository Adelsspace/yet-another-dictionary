import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeObj } from "../../@types/types";

const initialState = {
  firstLang: ["Русский", "ru"],
  secondLang: ["Английский", "en"],
  searchValue: "",
  searchResults: false,
  firstLangCode: "ru",
  secondLangCode: "en",
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
    setFirstLangCode(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSecondLangCode(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setLangCode(state, action: PayloadAction<CodeObj>) {
      state.firstLangCode = action.payload.firstLangCode;
      state.secondLangCode = action.payload.secondLangCode;
    },
    setResetQueryParams(state) {
      state.firstLang = ["Русский", "ru"];
      state.secondLang = ["Английский", "en"];
      state.searchValue = "";
    },
  },
});

export const {
  setFirstLang,
  setSecondLang,
  setSearchValue,
  setFirstLangCode,
  setSecondLangCode,
  setLangCode,
  setResetQueryParams,
} = TranslateDirectionSlice.actions;
export default TranslateDirectionSlice.reducer;
