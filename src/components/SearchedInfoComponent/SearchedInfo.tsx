import PropTypes from "prop-types";
import { yandexAPI } from "../../redux/yandexApi";
import { SearchInfoProps } from "../../@types/types";
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../redux/user/slice";
import style from "./SearchedInfo.module.scss";
import NotFound from "../../pages/NotFound";
import { selectIsLogged, selectLogin } from "../../redux/user/selectors";
import { updateUserHistory } from "../../utils/updateUserHistory";
import { FavoritesIndicator } from "../FavoritesIndicatorComponent/FavoritesIndicator";

export const SearchedInfo = ({
  firstLangCode,
  secondLangCode,
  searchValue,
}: SearchInfoProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectLogin);
  const isLogged = useSelector(selectIsLogged);
  const { data, error, isLoading } = yandexAPI.useFetachTranslateQuery(
    { firstLangCode, secondLangCode, searchValue },
    { skip: !searchValue?.length }
  );
  const findResult = data ?? [];

  if (findResult.length) {
    const newHistoryEntry = {
      text: findResult[0]?.text,
      firstLangCode: firstLangCode,
      secondLangCode: secondLangCode,
      translate: findResult[0]?.tr[0].text,
    };
    const stringifyedHistory = JSON.stringify(newHistoryEntry);
    dispatch(addToHistory(stringifyedHistory));
    updateUserHistory(currentUser, stringifyedHistory);
  }

  return (
    <>
      {isLoading && <div>Загрузка данных... </div>}
      {error && (
        <div>Ошибка при обращении к серверу: {JSON.stringify(error)}</div>
      )}

      {Boolean(findResult.length) ? (
        <div className={style.wrapper}>
          {isLogged && (
            <FavoritesIndicator
              text={searchValue}
              firstLangCode={firstLangCode}
              secondLangCode={secondLangCode}
            />
          )}
          <div className={style.header}>{searchValue}</div>
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

SearchedInfo.propTypes = {
  firstLangCode: PropTypes.string.isRequired,
  secondLangCode: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
};
