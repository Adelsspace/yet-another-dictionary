import {
  selectFirstLangCode,
  selectSecondLangCode,
  selectSearchValue,
} from "../../redux/translateDirection/selectors";
import { yandexAPI } from "../../redux/yandexApi";
import { useSelector } from "react-redux";
import style from "./SearchResualt.module.scss";
import NotFound from "../../pages/NotFound";

export const SearchResualt = () => {
  const firstLangCode = useSelector(selectFirstLangCode);
  const secondLangCode = useSelector(selectSecondLangCode);
  const searchValue = useSelector(selectSearchValue);
  const { data, error } = yandexAPI.useFetachTranslateQuery(
    { firstLangCode, secondLangCode, searchValue },
    { skip: !searchValue.length }
  );
  const findResult = data ?? [];

  return (
    <>
      {error && (
        <div>Ошибка при обращении к серверу: {JSON.stringify(error)}</div>
      )}
      {Boolean(findResult.length) ? (
        <div className={style.wrapper}>
          <div className={style.header}>{findResult[0]?.text}</div>
          <div>
            <ul>
              {findResult.map((obj) => (
                <li key={obj.pos} className={style.partOfSpeach}>
                  {obj.pos}
                  <ol className={style.translateWrapper}>
                    {obj.tr.map((translate, i: number) => (
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
