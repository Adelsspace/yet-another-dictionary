import { RootState } from "../store";

export const selectFirstLang = (state: RootState) =>
  state.translateDirection.firstLang;
export const selectSecondLang = (state: RootState) =>
  state.translateDirection.secondLang;
export const selectSearchValue = (state: RootState) =>
  state.translateDirection.searchValue;
export const selectSearchResults = (state: RootState) =>
  state.translateDirection.searchResults;
