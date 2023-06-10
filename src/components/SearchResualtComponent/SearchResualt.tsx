import {
  selectFirstLangCode,
  selectSecondLangCode,
  selectSearchValue,
} from "../../redux/translateDirection/selectors";

import { useSelector } from "react-redux";

import { SearchedInfo } from "../SearchedInfoComponent/SearchedInfo";

export const SearchResualt = () => {
  const firstLangCode = useSelector(selectFirstLangCode);
  const secondLangCode = useSelector(selectSecondLangCode);
  const searchValue = useSelector(selectSearchValue);
  return (
    <SearchedInfo
      firstLangCode={firstLangCode}
      secondLangCode={secondLangCode}
      searchValue={searchValue}
    />
  );
};
