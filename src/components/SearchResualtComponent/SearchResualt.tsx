import {
  selectFirstLang,
  selectSecondLang,
  selectSearchValue,
} from "../../redux/translateDirection/selectors";
import { yandexAPI } from "../../redux/yandexApi";
import { useDispatch, useSelector } from "react-redux";
import style from "./SearchResualt.module.scss";
import { setSearchResults } from "../../redux/translateDirection/slice";
import NotFound from "../../pages/NotFound";

export const SearchResualt = () => {
  const firstLang = useSelector(selectFirstLang)[1];
  const secondLang = useSelector(selectSecondLang)[1];
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const { data, error } = yandexAPI.useFetachTranslateQuery(
    { firstLang, secondLang, searchValue },
    { skip: !searchValue.length }
  );
  const findResult = data ?? [];
  dispatch(setSearchResults(true));

  return (
    <>
      {error && <div>Ошибка при обращении к серверу</div>}
      {Boolean(findResult.length) ? (
        <div className={style.wrapper}>
          <div className={style.header}>{findResult[0].text}</div>
          <div>
            <ul>
              {findResult.map((obj: any) => (
                <li key={obj.pos} className={style.partOfSpeach}>
                  {obj.pos}
                  <ol className={style.translateWrapper}>
                    {obj.tr.map((translate: any, i: number) => (
                      <li key={i} className={style.translate}>
                        {translate.text}
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};
