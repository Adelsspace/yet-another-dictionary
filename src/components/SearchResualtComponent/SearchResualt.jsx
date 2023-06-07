import {
  selectFirstLang,
  selectSecondLang,
  selectSearchValue,
} from "../../redux/translateDirection/selectors";
import { yandexAPI } from "../../redux/yandexApi";
import { useSelector } from "react-redux";
import styles from "./SearchResualt.module.scss";
import { NotFoundComponent } from "../NotFoundComponent/NotFound";

export const SearchResualt = () => {
  const firstLang = useSelector(selectFirstLang)[1];
  const secondLang = useSelector(selectSecondLang)[1];
  const searchValue = useSelector(selectSearchValue);

  const { data } = yandexAPI.useFetachTranslateQuery(
    { firstLang, secondLang, searchValue },
    { skip: !searchValue.length }
  );
  const findResult = data?.def ?? [];

  return (
    <div>
      {findResult.length ? (
        <div className={styles.wrapper}>{JSON.stringify(findResult)}</div>
      ) : (
        <NotFoundComponent />
      )}
    </div>
  );
};
