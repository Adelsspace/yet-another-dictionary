import { RootState } from "../store";

export const selectFirstLang = (state: RootState) =>
  state.translateDirection.firstLang;
export const selectFirstLangCode = (state: RootState) =>
  state.translateDirection.firstLang[1];
export const selectSecondLang = (state: RootState) =>
  state.translateDirection.secondLang;
export const selectSecondLangCode = (state: RootState) =>
  state.translateDirection.secondLang[1];
export const selectSearchValue = (state: RootState) =>
  state.translateDirection.searchValue;
export const selectFirstCode = (state: RootState) =>
  state.translateDirection.firstLangCode;
export const selectSecondCode = (state: RootState) =>
  state.translateDirection.secondLangCode;
